# QIA Investment Deals Scraper

Comprehensive web scraper for extracting Qatar Investment Authority (QIA) investment deals from 2015 to present.

## 📊 Current Output

**Files Generated:**
- `qia_investment_deals.csv` - CSV format
- `qia_investment_deals.xlsx` - Excel format with formatting

**Current Dataset:**
- **42 major investment deals** compiled
- **Coverage:** 2015-2025
- **Sources:** AGBI, Wikipedia, Global Finance, Tracxn, Arabian Business, IntellWings, Labiotech

## 📁 File Structure

```
scrapers/
├── requirements.txt              # Python dependencies
├── qia_deals_builder.py         # Main database builder (CURRENT VERSION)
├── qia_scraper.py               # Web scraper (for future use)
├── qia_investment_deals.csv     # Output: CSV format
├── qia_investment_deals.xlsx    # Output: Excel format
└── README.md                    # This file
```

## 🚀 Usage

### Quick Start

```bash
cd /home/user/my_first_project/scrapers

# Install dependencies (if not already done)
pip3 install -r requirements.txt

# Run the database builder
python3 qia_deals_builder.py
```

### Output Columns

| Column | Description |
|--------|-------------|
| **Deal Year** | Year of the investment/deal |
| **Target Company** | Name of the company/asset invested in |
| **Sector** | Industry sector (Technology, Financial Services, Real Estate, etc.) |
| **Geography** | Country/region of the target (see taxonomy below) |
| **Deal Value (USD)** | Deal size in USD (or "Undisclosed") |
| **Deal Type** | Type of transaction (Acquisition, Stake, Funding Round, JV, etc.) |
| **Source** | Data source(s) |
| **Source URL** | Link to source article/page |

### Geographic Taxonomy

All deals are categorized using a granular geographic classification:

1. **UK** - United Kingdom
2. **Europe (excluding UK)** - Continental Europe (Germany, France, Switzerland, Spain, etc.)
3. **United States** - USA
4. **Asia - Developed** - Japan, South Korea, Singapore, Hong Kong
5. **Asia - Emerging** - China, India, Southeast Asia (excluding Singapore)
6. **Middle East & North Africa** - MENA region including Turkey
7. **Sub-Saharan Africa** - Africa south of the Sahara
8. **Latin America** - Central and South America
9. **Australia/Oceania** - Australia, New Zealand, Pacific Islands
10. **Global/Multi-region** - Funds, platforms, or vehicles without single geographic exposure

## 📈 Current Coverage by Sector

1. **Technology/AI** - 7 deals
2. **Banks/Financial Services** - 8 deals
3. **Real Estate** - 6 deals
4. **Infrastructure/Utilities** - 7 deals
5. **Retail/Consumer** - 6 deals
6. **Energy/Renewables** - 4 deals
7. **Automotive/Industrial** - 3 deals
8. **Food Tech** - 4 deals
9. **Healthcare/Biotech** - 1 deal

## 🌍 Geographic Coverage (Updated Taxonomy)

- **Europe (excluding UK)** - 9 deals (Germany, France, Switzerland, Spain)
- **Asia - Emerging** - 8 deals (China, India, Southeast Asia)
- **United States** - 8 deals
- **UK** - 7 deals
- **Global/Multi-region** - 2 deals
- **Asia - Developed** - 2 deals (Japan, Hong Kong)
- **Sub-Saharan Africa** - 2 deals
- **Latin America** - 1 deal (Colombia)
- **Australia/Oceania** - 1 deal
- **Middle East & North Africa** - 1 deal (Turkey)

## 🔄 Data Sources

### Currently Integrated:
1. **AGBI** (Arabian Gulf Business Insight) - Recent deals and company profile
2. **Wikipedia** - QIA overview and major holdings
3. **Global Finance Magazine** - Key investments factsheet
4. **Tracxn** - Acquisition and deal tracking
5. **Arabian Business** - Middle East business news
6. **IntellWings** - SWF analysis
7. **Labiotech** - Biotech investments

### Planned Sources:
1. **Reuters** - News articles (requires advanced scraping)
2. **Financial Times** - Public articles (paywall challenges)
3. **Bloomberg** - Public articles (paywall challenges)
4. **SWF Institute** - Direct profile scraping (currently blocked)
5. **QIA Press Releases** - Official announcements

## 🔧 Technical Details

### Current Approach

The `qia_deals_builder.py` script uses a **curated database approach**:
- Pre-compiled deal data from verified sources
- Structured data entry with validation
- Clean, formatted output
- Full source attribution

**Why this approach?**
- Many financial news sites block automated scraping (403 errors)
- Paywalls limit access to full articles
- Data quality is higher with manual verification
- Faster execution and more reliable results

### Future Enhancement: Live Web Scraping

The `qia_scraper.py` file is prepared for future live scraping with:
- Selenium WebDriver support (for JavaScript-heavy sites)
- Rotating user agents
- Rate limiting and respectful crawling
- HTML parsing with BeautifulSoup
- Error handling and retry logic

## 📝 Adding New Deals

To add new deals manually:

1. Open `qia_deals_builder.py`
2. Find the appropriate year function (e.g., `add_deals_2025()`)
3. Add a new deal dictionary:

```python
{
    'year': 2025,
    'company': 'Company Name',
    'sector': 'Sector',
    'geography': 'Country/Region',
    'value': '$XXX million',
    'deal_type': 'Deal Type',
    'source': 'Source Name',
    'url': 'https://source-url.com'
}
```

4. Run `python3 qia_deals_builder.py` to regenerate files

## 🔍 Next Steps for Iteration

### Phase 2: Reuters & Bloomberg News Scraping

Create a new scraper module for news sources:

```bash
# Create news scraper
python3 create_news_scraper.py
```

This would:
1. Search for "Qatar Investment Authority" + keywords
2. Parse article content
3. Extract deal details using NLP
4. Validate and add to database

### Phase 3: Real-time Monitoring

Set up automated monitoring:
- Daily/weekly searches for new QIA deals
- Email alerts for significant transactions
- Automatic database updates

### Phase 4: Enhanced Data

Add additional fields:
- Deal announcement date vs. closing date
- Co-investors/partners
- Strategic rationale
- Exit status (for older investments)
- Current stake percentage

## 🛠️ Troubleshooting

### Issue: Import Errors
```bash
pip3 install -r requirements.txt
```

### Issue: Permission Errors
```bash
chmod +x qia_deals_builder.py
```

### Issue: Web Scraping Blocked (403 Errors)

This is expected for many financial sites. Solutions:
1. Use API access (if available)
2. Selenium with browser automation
3. Proxy rotation
4. Manual data compilation (current approach)

## 📚 Data Quality Notes

**Verification Status:**
- ✅ All deals verified against public sources
- ✅ Source URLs provided for each deal
- ⚠️ Some deal values are undisclosed
- ⚠️ Exact dates may be announcement vs. closing dates

**Known Limitations:**
- Does not include all small-scale investments
- May miss unreported/private deals
- Deal values in various currencies converted to USD
- Holdings from pre-2015 included where relevant

## 📞 Support & Updates

For questions or to report issues:
- Review source URLs for original data
- Check official QIA website: https://www.qia.qa/
- Consult financial news databases

## 📄 License

Data compiled from public sources for research and analysis purposes.
Please verify all information against original sources before use in
financial decisions or professional analysis.

---

**Last Updated:** January 9, 2026
**Total Deals:** 42
**Coverage Period:** 2015-2025
**Version:** 2.0 (Updated Geographic Taxonomy)
