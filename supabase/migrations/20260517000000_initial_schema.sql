-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Services Table
CREATE TABLE IF NOT EXISTS services (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    icon TEXT, -- Lucide icon name or emoji
    display_order INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Articles Table
CREATE TABLE IF NOT EXISTS articles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    content TEXT NOT NULL,
    featured_image_url TEXT,
    published_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Portfolios Table
CREATE TABLE IF NOT EXISTS portfolios (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT NOT NULL,
    category TEXT,
    main_image_url TEXT,
    client TEXT,
    year TEXT,
    live_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Portfolio Images Table (for multiple images support)
CREATE TABLE IF NOT EXISTS portfolio_images (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    portfolio_id UUID REFERENCES portfolios(id) ON DELETE CASCADE,
    image_url TEXT NOT NULL,
    display_order INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Leads Table (for contact form)
CREATE TABLE IF NOT EXISTS leads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    service_type TEXT,
    details TEXT,
    consultation_requested BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Row Level Security (RLS)
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolios ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Public Read Access
CREATE POLICY "Allow public read services" ON services FOR SELECT USING (true);
CREATE POLICY "Allow public read articles" ON articles FOR SELECT USING (published_at IS NOT NULL);
CREATE POLICY "Allow public read portfolios" ON portfolios FOR SELECT USING (true);
CREATE POLICY "Allow public read portfolio_images" ON portfolio_images FOR SELECT USING (true);

-- Authenticated Write Access (for Admin)
CREATE POLICY "Allow auth all services" ON services FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow auth all articles" ON articles FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow auth all portfolios" ON portfolios FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow auth all portfolio_images" ON portfolio_images FOR ALL USING (auth.role() = 'authenticated');

-- Leads: Anyone can insert, only auth can read/delete
CREATE POLICY "Allow public insert leads" ON leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow auth read leads" ON leads FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Allow auth delete leads" ON leads FOR DELETE USING (auth.role() = 'authenticated');
