-- Create tables for CMS content management

-- Site Settings table
CREATE TABLE public.site_settings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT NOT NULL UNIQUE,
  value JSONB NOT NULL DEFAULT '{}',
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Trainers table
CREATE TABLE public.trainers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  specialty TEXT NOT NULL,
  experience TEXT NOT NULL,
  quote TEXT,
  image_url TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Pricing Plans table
CREATE TABLE public.pricing_plans (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  period TEXT NOT NULL DEFAULT 'month',
  features JSONB NOT NULL DEFAULT '[]',
  is_popular BOOLEAN NOT NULL DEFAULT false,
  sort_order INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Testimonials table
CREATE TABLE public.testimonials (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  client_name TEXT NOT NULL,
  membership_type TEXT,
  quote TEXT NOT NULL,
  rating INTEGER NOT NULL DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  image_url TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Gallery Images table
CREATE TABLE public.gallery_images (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  image_url TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'all',
  sort_order INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Contact Form Submissions table
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT,
  is_read BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Class Schedule table
CREATE TABLE public.class_schedule (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  class_name TEXT NOT NULL,
  day_of_week TEXT NOT NULL,
  time_slot TEXT NOT NULL,
  trainer_id UUID REFERENCES public.trainers(id),
  is_active BOOLEAN NOT NULL DEFAULT true
);

-- Enable RLS on all tables
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.trainers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pricing_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.class_schedule ENABLE ROW LEVEL SECURITY;

-- Public read policies for website content
CREATE POLICY "Public can view site settings"
  ON public.site_settings FOR SELECT
  USING (true);

CREATE POLICY "Public can view active trainers"
  ON public.trainers FOR SELECT
  USING (is_active = true);

CREATE POLICY "Public can view active pricing plans"
  ON public.pricing_plans FOR SELECT
  USING (is_active = true);

CREATE POLICY "Public can view active testimonials"
  ON public.testimonials FOR SELECT
  USING (is_active = true);

CREATE POLICY "Public can view active gallery images"
  ON public.gallery_images FOR SELECT
  USING (is_active = true);

CREATE POLICY "Public can view active class schedule"
  ON public.class_schedule FOR SELECT
  USING (is_active = true);

-- Public can submit contact forms
CREATE POLICY "Public can submit contact forms"
  ON public.contact_submissions FOR INSERT
  WITH CHECK (true);

-- Insert default site settings
INSERT INTO public.site_settings (key, value) VALUES
  ('gym_name', '"PowerFit Gym"'),
  ('tagline', '"Build Your Strongest Self"'),
  ('phone', '"+1 (234) 567-8900"'),
  ('email', '"info@powerfit.com"'),
  ('address', '{"street": "123 Fitness Street", "city": "Downtown", "zip": "10001"}'),
  ('hours', '{"weekday": "5 AM - 11 PM", "saturday": "7 AM - 9 PM", "sunday": "7 AM - 9 PM"}'),
  ('social', '{"instagram": "#", "facebook": "#", "youtube": "#", "twitter": "#"}');

-- Insert default trainers
INSERT INTO public.trainers (name, specialty, experience, quote, image_url, sort_order) VALUES
  ('Marcus Johnson', 'Strength & Conditioning', '12 years', 'Every rep counts. Every day matters.', 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80', 1),
  ('Sarah Williams', 'HIIT & Cardio', '8 years', 'Push harder than yesterday.', 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80', 2),
  ('David Chen', 'CrossFit & Functional', '10 years', 'Functional fitness for real life.', 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80', 3),
  ('Emily Rodriguez', 'Yoga & Flexibility', '6 years', 'Strength through balance.', 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80', 4);

-- Insert default pricing plans
INSERT INTO public.pricing_plans (name, price, period, features, is_popular, sort_order) VALUES
  ('Basic', 29, 'month', '["Full gym access", "Locker room access", "Basic equipment", "Fitness assessment"]', false, 1),
  ('Pro', 59, 'month', '["Everything in Basic", "All group classes", "Trainer consultation", "Nutrition guide", "Guest passes (2/mo)"]', true, 2),
  ('Elite', 99, 'month', '["Everything in Pro", "Personal training (4 sessions)", "24/7 gym access", "Custom meal plan", "Priority booking", "Free merchandise"]', false, 3);

-- Insert default testimonials
INSERT INTO public.testimonials (client_name, membership_type, quote, rating) VALUES
  ('Mike Thompson', 'Elite Member', 'PowerFit transformed my life. Lost 30 lbs in 3 months with their amazing trainers and community support.', 5),
  ('Jennifer Lee', 'Pro Member', 'The classes are incredible! The energy is contagious and the trainers push you to be your best.', 5),
  ('Robert Garcia', 'Elite Member', 'Best investment I have made in myself. The 24/7 access and personal training are game changers.', 5);

-- Create trigger for updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_site_settings_updated_at
  BEFORE UPDATE ON public.site_settings
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_trainers_updated_at
  BEFORE UPDATE ON public.trainers
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_pricing_plans_updated_at
  BEFORE UPDATE ON public.pricing_plans
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();