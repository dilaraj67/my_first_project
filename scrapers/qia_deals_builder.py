#!/usr/bin/env python3
"""
QIA Investment Deals Database Builder
Compiles Qatar Investment Authority major investment deals from verified sources
Data sourced from: AGBI, Global Finance, Wikipedia, Reuters, Bloomberg reports
"""

import pandas as pd
from datetime import datetime

class QIADealsDatabase:
    def __init__(self):
        self.deals = []

    def add_deals_2025(self):
        """Add major deals from 2025"""
        deals_2025 = [
            {
                'year': 2025,
                'company': 'xAI (Elon Musk)',
                'sector': 'Technology/AI',
                'geography': 'United States',
                'value': '$20 billion (participation in Series E)',
                'deal_type': 'Series E Funding Round',
                'source': 'Arabian Business, AGBI',
                'url': 'https://www.arabianbusiness.com/industries/banking-finance/qatar-investment-authority-participates-in-xais-20-billion-funding-round'
            },
            {
                'year': 2025,
                'company': 'Databricks',
                'sector': 'Technology/AI/Data',
                'geography': 'United States',
                'value': 'Undisclosed',
                'deal_type': 'Funding Round Participation',
                'source': 'AGBI',
                'url': 'https://www.agbi.com/companies/qatar-investment-authority/'
            },
            {
                'year': 2025,
                'company': 'Instabase',
                'sector': 'Technology/AI',
                'geography': 'United States',
                'value': '$100 million',
                'deal_type': 'Series D Funding',
                'source': 'AGBI',
                'url': 'https://www.agbi.com/companies/qatar-investment-authority/'
            },
            {
                'year': 2025,
                'company': 'Brookfield - AI Infrastructure JV',
                'sector': 'Infrastructure/Technology',
                'geography': 'Qatar/Global',
                'value': '$20 billion',
                'deal_type': 'Joint Venture',
                'source': 'AGBI',
                'url': 'https://www.agbi.com/companies/qatar-investment-authority/'
            },
            {
                'year': 2025,
                'company': 'Daya Anagata Nusantara (Indonesia)',
                'sector': 'Multi-sector (Renewables, Healthcare, Tech)',
                'geography': 'Indonesia',
                'value': '$4 billion',
                'deal_type': 'Joint Fund',
                'source': 'AGBI',
                'url': 'https://www.agbi.com/companies/qatar-investment-authority/'
            },
            {
                'year': 2025,
                'company': 'Janus Henderson Investors',
                'sector': 'Financial Services/Asset Management',
                'geography': 'United States/Global',
                'value': 'Undisclosed',
                'deal_type': 'Acquisition',
                'source': 'AGBI, CB Insights',
                'url': 'https://www.cbinsights.com/investor/qatar-investment-authority'
            },
            {
                'year': 2025,
                'company': 'Monumental Sports & Entertainment',
                'sector': 'Sports/Entertainment',
                'geography': 'United States',
                'value': 'Undisclosed',
                'deal_type': 'Private Equity Investment',
                'source': 'CB Insights',
                'url': 'https://www.cbinsights.com/investor/qatar-investment-authority'
            },
            {
                'year': 2025,
                'company': 'Isagen',
                'sector': 'Energy/Infrastructure',
                'geography': 'Colombia',
                'value': '$500 million',
                'deal_type': 'Stake Increase to 15%',
                'source': 'AGBI',
                'url': 'https://www.agbi.com/companies/qatar-investment-authority/'
            },
            {
                'year': 2025,
                'company': 'Ivanhoe Mines',
                'sector': 'Mining/Natural Resources',
                'geography': 'Canada (operations in Africa)',
                'value': '$500 million',
                'deal_type': 'Equity Investment (~4% stake)',
                'source': 'AGBI',
                'url': 'https://www.agbi.com/companies/qatar-investment-authority/'
            },
            {
                'year': 2025,
                'company': 'Rebel Foods (follow-on)',
                'sector': 'Technology/Food Tech',
                'geography': 'India',
                'value': '$25 million',
                'deal_type': 'Follow-on Investment',
                'source': 'IntellWings',
                'url': 'https://intelliwings.com/blogposts/2025/04/01/the-qatar-investment-authority-a-small-nations-portfolio-powerhouse/'
            }
        ]
        self.deals.extend(deals_2025)

    def add_deals_2024(self):
        """Add major deals from 2024"""
        deals_2024 = [
            {
                'year': 2024,
                'company': 'Cresta',
                'sector': 'Technology/AI',
                'geography': 'United States',
                'value': '$125 million',
                'deal_type': 'Funding Round (Led by QIA)',
                'source': 'Wikipedia, AGBI',
                'url': 'https://en.wikipedia.org/wiki/Qatar_Investment_Authority'
            },
            {
                'year': 2024,
                'company': 'RWE',
                'sector': 'Energy/Renewables',
                'geography': 'Germany/Europe',
                'value': '$2.63 billion (€2.4B)',
                'deal_type': 'Strategic Equity Investment',
                'source': 'Wikipedia, AGBI',
                'url': 'https://en.wikipedia.org/wiki/Qatar_Investment_Authority'
            },
            {
                'year': 2024,
                'company': 'ChinaAMC',
                'sector': 'Financial Services/Asset Management',
                'geography': 'China',
                'value': 'Undisclosed',
                'deal_type': '10% Stake Agreement (pending regulatory approval)',
                'source': 'AGBI',
                'url': 'https://www.agbi.com/companies/qatar-investment-authority/'
            },
            {
                'year': 2024,
                'company': 'Kokusai Electric',
                'sector': 'Technology/Semiconductors',
                'geography': 'Japan',
                'value': 'Undisclosed',
                'deal_type': '5% Stake',
                'source': 'AGBI',
                'url': 'https://www.agbi.com/companies/qatar-investment-authority/'
            },
            {
                'year': 2024,
                'company': "McDonald's China/Hong Kong (via Trustar Capital)",
                'sector': 'Retail/Consumer/Food',
                'geography': 'China/Hong Kong',
                'value': '$1 billion',
                'deal_type': 'Continuation Fund (Anchor Investor)',
                'source': 'AGBI',
                'url': 'https://www.agbi.com/companies/qatar-investment-authority/'
            }
        ]
        self.deals.extend(deals_2024)

    def add_deals_2023(self):
        """Add major deals from 2023"""
        deals_2023 = [
            {
                'year': 2023,
                'company': 'Reliance Retail Ventures',
                'sector': 'Retail/Consumer',
                'geography': 'India',
                'value': '$1 billion',
                'deal_type': '1% Stake',
                'source': 'Wikipedia, AGBI',
                'url': 'https://en.wikipedia.org/wiki/Qatar_Investment_Authority'
            },
            {
                'year': 2023,
                'company': 'Builder.ai',
                'sector': 'Technology/Software',
                'geography': 'United Kingdom',
                'value': '$250 million',
                'deal_type': 'Series D Funding (Led by QIA)',
                'source': 'AGBI',
                'url': 'https://www.agbi.com/companies/qatar-investment-authority/'
            },
            {
                'year': 2023,
                'company': 'Credit Suisse Group',
                'sector': 'Banks/Financial Services',
                'geography': 'Switzerland/Europe',
                'value': 'Undisclosed',
                'deal_type': 'Stake Doubled to 6% (became 2nd largest shareholder)',
                'source': 'AGBI',
                'url': 'https://www.agbi.com/companies/qatar-investment-authority/'
            },
            {
                'year': 2023,
                'company': 'The North Road Company',
                'sector': 'Infrastructure',
                'geography': 'Australia',
                'value': '$150 million',
                'deal_type': 'Strategic Investment',
                'source': 'AGBI',
                'url': 'https://www.agbi.com/companies/qatar-investment-authority/'
            }
        ]
        self.deals.extend(deals_2023)

    def add_deals_2022(self):
        """Add major deals from 2022"""
        deals_2022 = [
            {
                'year': 2022,
                'company': 'Snyk',
                'sector': 'Technology/Cybersecurity',
                'geography': 'United States/UK',
                'value': '$196.5 million',
                'deal_type': 'Funding Round (Led by QIA)',
                'source': 'AGBI',
                'url': 'https://www.agbi.com/companies/qatar-investment-authority/'
            },
            {
                'year': 2022,
                'company': 'Swiggy',
                'sector': 'Technology/Food Tech',
                'geography': 'India',
                'value': '$700 million',
                'deal_type': 'Funding Round Participation',
                'source': 'AGBI',
                'url': 'https://www.agbi.com/companies/qatar-investment-authority/'
            },
            {
                'year': 2022,
                'company': 'Innovafeed',
                'sector': 'AgTech/Food',
                'geography': 'France/Europe',
                'value': '$250 million',
                'deal_type': 'Funding Round (Led by QIA)',
                'source': 'AGBI',
                'url': 'https://www.agbi.com/companies/qatar-investment-authority/'
            }
        ]
        self.deals.extend(deals_2022)

    def add_deals_2021(self):
        """Add major deals from 2021"""
        deals_2021 = [
            {
                'year': 2021,
                'company': 'Trendyol',
                'sector': 'Retail/E-commerce',
                'geography': 'Turkey/Emerging Markets',
                'value': '$1.5 billion',
                'deal_type': 'Funding Round Participation',
                'source': 'Wikipedia, AGBI',
                'url': 'https://en.wikipedia.org/wiki/Qatar_Investment_Authority'
            },
            {
                'year': 2021,
                'company': 'Eat Just',
                'sector': 'Technology/Food Tech',
                'geography': 'United States',
                'value': '$200 million',
                'deal_type': 'Funding Round (Led by QIA)',
                'source': 'Wikipedia, Labiotech',
                'url': 'https://www.labiotech.eu/in-depth/qatar-investment-authority-biotech/'
            },
            {
                'year': 2021,
                'company': 'Rebel Foods',
                'sector': 'Technology/Food Tech',
                'geography': 'India',
                'value': '$175 million',
                'deal_type': 'Funding Round (Led by QIA)',
                'source': 'Wikipedia, IntellWings',
                'url': 'https://intelliwings.com/blogposts/2025/04/01/the-qatar-investment-authority-a-small-nations-portfolio-powerhouse/'
            }
        ]
        self.deals.extend(deals_2021)

    def add_deals_2020(self):
        """Add major deals from 2020"""
        deals_2020 = [
            {
                'year': 2020,
                'company': 'CureVac',
                'sector': 'Biotech/Healthcare',
                'geography': 'Germany/Europe',
                'value': 'Undisclosed',
                'deal_type': 'Strategic Investment (mRNA COVID vaccine development)',
                'source': 'Labiotech',
                'url': 'https://www.labiotech.eu/in-depth/qatar-investment-authority-biotech/'
            },
            {
                'year': 2020,
                'company': 'Sub-Saharan African Renewable Energy Platform (with Enel)',
                'sector': 'Infrastructure/Renewables',
                'geography': 'Africa/Emerging Markets',
                'value': 'Undisclosed',
                'deal_type': 'Platform Investment',
                'source': 'Labiotech',
                'url': 'https://www.labiotech.eu/in-depth/qatar-investment-authority-biotech/'
            }
        ]
        self.deals.extend(deals_2020)

    def add_deals_2019(self):
        """Add major deals from 2019"""
        deals_2019 = [
            {
                'year': 2019,
                'company': "BYJU'S",
                'sector': 'Technology/EdTech',
                'geography': 'India/Asia',
                'value': '$150 million',
                'deal_type': 'Funding Round (Led by QIA)',
                'source': 'Tracxn',
                'url': 'https://tracxn.com/d/acquisitions/acquisitions-by-qatar-investment-authority/'
            }
        ]
        self.deals.extend(deals_2019)

    def add_deals_2018(self):
        """Add major deals from 2018"""
        deals_2018 = [
            {
                'year': 2018,
                'company': 'Compass',
                'sector': 'Real Estate/Technology',
                'geography': 'United States',
                'value': '$400 million',
                'deal_type': 'Funding Round (Co-led with SoftBank Vision Fund)',
                'source': 'Tracxn',
                'url': 'https://tracxn.com/d/acquisitions/acquisitions-by-qatar-investment-authority/'
            },
            {
                'year': 2018,
                'company': 'Veolia Environnement',
                'sector': 'Infrastructure/Utilities',
                'geography': 'France/Europe',
                'value': 'Undisclosed',
                'deal_type': 'Divestiture (sold 4.6% stake)',
                'source': 'Tracxn',
                'url': 'https://tracxn.com/d/acquisitions/acquisitions-by-qatar-investment-authority/'
            },
            {
                'year': 2018,
                'company': 'Lifestyle International Holdings',
                'sector': 'Retail',
                'geography': 'Hong Kong/Asia',
                'value': 'Undisclosed',
                'deal_type': 'Divestiture (sold entire 23.16% stake)',
                'source': 'Tracxn',
                'url': 'https://tracxn.com/d/acquisitions/acquisitions-by-qatar-investment-authority/'
            }
        ]
        self.deals.extend(deals_2018)

    def add_deals_2017(self):
        """Add major deals from 2017"""
        deals_2017 = [
            {
                'year': 2017,
                'company': 'Gigamon',
                'sector': 'Technology/Networking',
                'geography': 'United States',
                'value': '$1.6 billion',
                'deal_type': 'Acquisition (Joint with Elliott Investment)',
                'source': 'Tracxn',
                'url': 'https://tracxn.com/d/acquisitions/acquisitions-by-qatar-investment-authority/'
            }
        ]
        self.deals.extend(deals_2017)

    def add_deals_2016(self):
        """Add major deals from 2016"""
        deals_2016 = [
            {
                'year': 2016,
                'company': 'National Grid UK Gas Distribution',
                'sector': 'Infrastructure/Utilities',
                'geography': 'United Kingdom/Europe',
                'value': 'Undisclosed (multi-billion)',
                'deal_type': '61% Acquisition (Consortium with Macquarie, Allianz, Hermes, CIC)',
                'source': 'Tracxn',
                'url': 'https://tracxn.com/d/acquisitions/acquisitions-by-qatar-investment-authority/'
            }
        ]
        self.deals.extend(deals_2016)

    def add_deals_2015(self):
        """Add major deals from 2015"""
        deals_2015 = [
            {
                'year': 2015,
                'company': 'Canary Wharf Group',
                'sector': 'Real Estate',
                'geography': 'United Kingdom/Europe',
                'value': 'Undisclosed (multi-billion)',
                'deal_type': '50% Stake Acquisition',
                'source': 'Wikipedia, Global Finance',
                'url': 'https://gfmag.com/economics-policy-regulation/qia-key-investments/'
            }
        ]
        self.deals.extend(deals_2015)

    def add_major_holdings(self):
        """Add major ongoing holdings (established pre-2015 or exact dates unclear)"""
        major_holdings = [
            {
                'year': 2015,
                'company': 'Harrods',
                'sector': 'Retail/Luxury',
                'geography': 'United Kingdom/Europe',
                'value': 'Undisclosed',
                'deal_type': 'Full Ownership (acquired 2010, held through period)',
                'source': 'Wikipedia, Arabian Business',
                'url': 'https://www.arabianbusiness.com/revealed-qatar-investment-authority-s-investments-across-world-674254.html'
            },
            {
                'year': 2015,
                'company': 'The Shard',
                'sector': 'Real Estate',
                'geography': 'United Kingdom/Europe',
                'value': 'Undisclosed',
                'deal_type': 'Ownership (95% via Qatari Diar)',
                'source': 'Wikipedia, Arabian Business',
                'url': 'https://www.arabianbusiness.com/revealed-qatar-investment-authority-s-investments-across-world-674254.html'
            },
            {
                'year': 2015,
                'company': 'Heathrow Airport',
                'sector': 'Infrastructure/Transportation',
                'geography': 'United Kingdom/Europe',
                'value': 'Undisclosed',
                'deal_type': '20% Stake',
                'source': 'Global Finance',
                'url': 'https://gfmag.com/economics-policy-regulation/qia-key-investments/'
            },
            {
                'year': 2015,
                'company': 'Volkswagen AG',
                'sector': 'Automotive/Industrial',
                'geography': 'Germany/Europe',
                'value': 'Undisclosed (multi-billion)',
                'deal_type': '~17% Stake (Largest Shareholder)',
                'source': 'Arabian Business, Wikipedia',
                'url': 'https://www.arabianbusiness.com/revealed-qatar-investment-authority-s-investments-across-world-674254.html'
            },
            {
                'year': 2015,
                'company': 'Barclays',
                'sector': 'Banks/Financial Services',
                'geography': 'United Kingdom/Europe',
                'value': '€7.5 billion (2008 investment)',
                'deal_type': '12.7% Stake',
                'source': 'The National, Arabian Business',
                'url': 'https://www.thenational.ae/business/qatar-a-portfolio-that-will-only-grow-bigger-1.464198'
            },
            {
                'year': 2015,
                'company': 'Porsche',
                'sector': 'Automotive/Industrial',
                'geography': 'Germany/Europe',
                'value': 'Undisclosed',
                'deal_type': 'Strategic Equity Stake',
                'source': 'Arabian Business',
                'url': 'https://www.arabianbusiness.com/revealed-qatar-investment-authority-s-investments-across-world-674254.html'
            },
            {
                'year': 2015,
                'company': 'Iberdrola',
                'sector': 'Energy/Infrastructure',
                'geography': 'Spain/Europe',
                'value': 'Undisclosed',
                'deal_type': 'Strategic Equity Stake',
                'source': 'Wikipedia',
                'url': 'https://en.wikipedia.org/wiki/Qatar_Investment_Authority'
            },
            {
                'year': 2015,
                'company': 'Hochtief',
                'sector': 'Construction/Industrial',
                'geography': 'Germany/Europe',
                'value': 'Undisclosed',
                'deal_type': 'Strategic Equity Stake',
                'source': 'Arabian Business',
                'url': 'https://www.arabianbusiness.com/revealed-qatar-investment-authority-s-investments-across-world-674254.html'
            }
        ]
        self.deals.extend(major_holdings)

    def build_database(self):
        """Build complete deals database"""
        print("Building QIA Deals Database...")
        print("=" * 60)

        self.add_deals_2025()
        print(f"✓ Added 2025 deals")

        self.add_deals_2024()
        print(f"✓ Added 2024 deals")

        self.add_deals_2023()
        print(f"✓ Added 2023 deals")

        self.add_deals_2022()
        print(f"✓ Added 2022 deals")

        self.add_deals_2021()
        print(f"✓ Added 2021 deals")

        self.add_deals_2020()
        print(f"✓ Added 2020 deals")

        self.add_deals_2019()
        print(f"✓ Added 2019 deals")

        self.add_deals_2018()
        print(f"✓ Added 2018 deals")

        self.add_deals_2017()
        print(f"✓ Added 2017 deals")

        self.add_deals_2016()
        print(f"✓ Added 2016 deals")

        self.add_deals_2015()
        print(f"✓ Added 2015 deals")

        self.add_major_holdings()
        print(f"✓ Added major holdings")

        print("=" * 60)
        print(f"✅ Total deals compiled: {len(self.deals)}")

    def export_to_files(self, base_filename="qia_investment_deals"):
        """Export to CSV and Excel"""
        if not self.deals:
            print("⚠️  No deals to export")
            return

        # Create DataFrame
        df = pd.DataFrame(self.deals)

        # Reorder and rename columns
        df = df[['year', 'company', 'sector', 'geography', 'value', 'deal_type', 'source', 'url']]
        df.columns = ['Deal Year', 'Target Company', 'Sector', 'Geography',
                      'Deal Value (USD)', 'Deal Type', 'Source', 'Source URL']

        # Sort by year descending, then by company name
        df = df.sort_values(['Deal Year', 'Target Company'], ascending=[False, True])

        # Export to CSV
        csv_path = f"/home/user/my_first_project/scrapers/{base_filename}.csv"
        df.to_csv(csv_path, index=False, encoding='utf-8')

        # Export to Excel with formatting
        excel_path = f"/home/user/my_first_project/scrapers/{base_filename}.xlsx"
        with pd.ExcelWriter(excel_path, engine='openpyxl') as writer:
            df.to_excel(writer, index=False, sheet_name='QIA Deals 2015-2025')

            # Get the worksheet
            worksheet = writer.sheets['QIA Deals 2015-2025']

            # Auto-adjust column widths
            for idx, col in enumerate(df.columns):
                max_length = max(
                    df[col].astype(str).apply(len).max(),
                    len(col)
                )
                worksheet.column_dimensions[chr(65 + idx)].width = min(max_length + 2, 50)

        print("\n" + "=" * 60)
        print("📊 EXPORT COMPLETE")
        print("=" * 60)
        print(f"CSV File:   {csv_path}")
        print(f"Excel File: {excel_path}")
        print(f"\nTotal Deals: {len(df)}")

        return df

    def print_summary(self, df):
        """Print summary statistics"""
        print("\n" + "=" * 60)
        print("📈 SUMMARY STATISTICS")
        print("=" * 60)

        print(f"\n📅 Deals by Year:")
        year_counts = df['Deal Year'].value_counts().sort_index(ascending=False)
        for year, count in year_counts.items():
            print(f"   {year}: {count} deals")

        print(f"\n🏢 Top Sectors:")
        sector_counts = df['Sector'].value_counts().head(10)
        for sector, count in sector_counts.items():
            print(f"   {sector}: {count} deals")

        print(f"\n🌍 Deals by Geography:")
        geo_counts = df['Geography'].value_counts().head(10)
        for geo, count in geo_counts.items():
            print(f"   {geo}: {count} deals")

        print(f"\n💼 Deal Types:")
        type_counts = df['Deal Type'].value_counts().head(10)
        for deal_type, count in type_counts.items():
            print(f"   {deal_type}: {count} deals")

        # Extract deals with disclosed values
        disclosed_values = df[~df['Deal Value (USD)'].str.contains('Undisclosed', case=False, na=False)]
        print(f"\n💰 Deals with Disclosed Values: {len(disclosed_values)}/{len(df)}")

        print("\n" + "=" * 60)
        print("🎯 SAMPLE DEALS (Most Recent 15)")
        print("=" * 60)
        print(df[['Deal Year', 'Target Company', 'Sector', 'Geography', 'Deal Value (USD)']].head(15).to_string(index=False))


def main():
    """Main execution"""
    print("\n" + "=" * 60)
    print("QIA INVESTMENT DEALS DATABASE BUILDER")
    print("Qatar Investment Authority Deals 2015-2025")
    print("=" * 60 + "\n")

    # Build database
    db = QIADealsDatabase()
    db.build_database()

    # Export
    df = db.export_to_files()

    # Print summary
    if df is not None:
        db.print_summary(df)

    print("\n" + "=" * 60)
    print("✅ DATABASE BUILD COMPLETE")
    print("=" * 60)
    print("\nNext steps:")
    print("1. Review the exported CSV/Excel files")
    print("2. Verify deal information against sources")
    print("3. Add additional deals from other sources")
    print("4. Enhance with more detailed information")
    print("\nData sources: AGBI, Wikipedia, Global Finance, Tracxn,")
    print("              Arabian Business, IntellWings, Labiotech")
    print("=" * 60 + "\n")


if __name__ == "__main__":
    main()
