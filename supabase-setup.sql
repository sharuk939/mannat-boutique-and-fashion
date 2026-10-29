-- MANNAT: Supabase setup. Supabase > SQL Editor mein poora paste karke Run karein.
-- PEHLE neeche YOUR_ADMIN_EMAIL ki jagah apna admin email likhein (sirf ek jagah).

create or replace function public.is_admin() returns boolean
language sql stable as $$ select coalesce(auth.jwt() ->> 'email','') = 'YOUR_ADMIN_EMAIL' $$;

create table if not exists public.products(
  id uuid primary key default gen_random_uuid(),
  name text not null, category text not null, fabric text not null,
  description text, image_url text not null, image_path text,
  sort int not null default 0, created_at timestamptz not null default now());

alter table public.products enable row level security;
create policy "everyone can read" on public.products for select using (true);
create policy "only admin writes" on public.products for all using (public.is_admin()) with check (public.is_admin());

insert into storage.buckets (id,name,public) values ('products','products',true) on conflict (id) do nothing;
create policy "admin upload" on storage.objects for insert with check (bucket_id='products' and public.is_admin());
create policy "admin update" on storage.objects for update using (bucket_id='products' and public.is_admin());
create policy "admin delete" on storage.objects for delete using (bucket_id='products' and public.is_admin());

insert into public.products (name,category,fabric,description,image_url,sort) values
('Olive Cord Set','cordset','cotton','Relaxed olive tunic with matching bottoms. Easy, comfortable and stylish for everyday wear.','images/olive-coord.jpg',10),
('Green Embroidered Set','cordset','cotton','Soft green sleeveless top with delicate embroidery and a tiered hem, with matching bottoms.','images/green-embroidered-set.jpg',11),
('Pink Embroidered Set','cordset','cotton','Pretty pink top with scalloped embroidery, paired with matching bottoms.','images/pink-embroidered-set.jpg',12),
('Teal Linen Cord Set','cordset','linen','Textured teal tunic with a lace collar and pocket, with matching wide-leg pants.','images/teal-linen-coord.jpg',13),
('Sky Blue Shirt and Skirt Set','cordset','cotton','Light blue shirt with tiny embroidered bows, paired with a matching long skirt.','images/denim-set.jpg',14),
('Lime Floral Shirt','shirt','cotton','Fresh lime shirt with floral detailing on the buttons. Light and breezy.','images/lime-shirt.jpg',15),
('Navy Pearl Button Shirt','shirt','rayon','Classic navy shirt with pearl buttons and soft flowing sleeves.','images/navy-shirt.jpg',16),
('White Floral Embroidered Dress','onepiece','cotton','Elegant white and beige long dress with handcrafted 3D floral work.','images/white-floral-kurta.jpg',17),
('Cream Embroidered Dress','onepiece','cotton','Cream tiered dress with small pink floral embroidery. Light and graceful.','images/cream-embroidered-dress.jpg',18),
('Black Embroidered Dress','onepiece','denim','Washed black long dress with rich floral embroidery down the front.','images/black-embroidered-dress.jpg',19),
('Polka Dot Dress','onepiece','rayon','Classic black and white polka dot long dress. Timeless and easy to style.','images/polka-dress.jpg',20),
('Lime Embroidered Dress','onepiece','rayon','Long lime green button-front dress with delicate floral embroidery.','images/lime-embroidered-dress.jpg',21),
('Pink Jacket with White Dress','onepiece','cotton','Soft pink embroidered jacket paired with a flowy white tiered dress.','images/white-pink-dress.jpg',22),
('Green Lace Kurta Set','ladies','cotton','Mint green kurta with lace detailing on the front and sleeves, with matching bottoms.','images/green-lace-kurta.jpg',23),
('Peach Kurta Set','ladies','cotton','Soft peach kurta with scalloped sleeve edges and cream pants. Light and comfortable.','images/peach-kurta-set.jpg',24),
('Mustard Frill Top','top','cotton','Mustard top with pleated sleeves and a relaxed fit.','images/orange-top.jpg',25),
('Blue Floral Top','top','rayon','Navy and white floral top, bright and easy to wear.','images/floral-top.jpg',26),
('Emerald Frill Top','top','cotton','Emerald green top with a tie neck and a frill hem.','images/emerald-top.jpg',27);
