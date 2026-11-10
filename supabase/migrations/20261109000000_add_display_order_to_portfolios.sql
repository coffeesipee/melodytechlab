-- Add display_order to portfolios table
ALTER TABLE portfolios ADD COLUMN IF NOT EXISTS display_order INT DEFAULT 0;
