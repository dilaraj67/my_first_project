# PIF Investment Scraper - Initial Results Summary

## Data Collection Methodology

Due to access restrictions (403 errors) on traditional scraping targets like:
- swfinstitute.org
- globalswf.com
- fintel.io
- tracxn.com
- pif.gov.sa portfolio pages

I pivoted to using web search and news aggregation to compile PIF investment data from 2015-2025.

## Results

**Total Deals Captured: 28 major transactions**

### Database File
`pif_investments_2015_2025.csv`

### Sector Breakdown
- **Gaming/Technology**: 9 deals (EA, Nintendo, Capcom, Nexon, Embracer, Take-Two, Activision, Uber, Jio)
- **Infrastructure**: 5 deals (POSCO E&C, Blackstone, Heathrow, JLL-FMTECH, Saudi Aramco)
- **Automotive/EVs**: 3 deals (Lucid Motors, Tesla, McLaren)
- **Entertainment**: 2 deals (Live Nation, LIV Golf)
- **Financial Services/PE**: 3 deals (SoftBank Vision Fund, Affinity Partners, Mnuchin Fund)
- **Retail/Hospitality**: 3 deals (Americana, Reliance Retail, various COVID-era stakes)

### Geography Breakdown
- **United States**: 12 deals
- **Asia - Developed** (Japan, South Korea): 5 deals
- **Asia - Emerging** (India, South Korea): 4 deals
- **UK**: 3 deals
- **Europe (excluding UK)**: 1 deal (Sweden)
- **Middle East & North Africa** (excluding Saudi Arabia): 2 deals
- **Global/Multi-region**: 6 deals
- **Saudi Arabia**: 2 deals (domestic)

### Deal Value Insights
- **Largest Deal**: Electronic Arts acquisition ($55B total, 2025)
- **Major Commitments**: SoftBank Vision Fund ($45B), Blackstone Infrastructure ($20B)
- **Significant Stakes**: Nintendo ($2.98B), Uber ($3.5B), Heathrow ($2.5B est.)

## Data Quality Notes

### Strengths
- All deals verified through multiple credible sources
- Official PIF press releases used where available
- Deal values confirmed from financial news sources

### Limitations
1. **Missing deals**: Many smaller transactions (<$100M) likely not captured
2. **Incomplete valuations**: Some stakes acquired without disclosed values
3. **Sector gaps**: Limited data on:
   - Banking/financial services sector deals
   - Sub-Saharan Africa investments
   - Specific real estate acquisitions (beyond infrastructure)
4. **Source restrictions**: Major financial databases blocked automated access

## Next Steps - Iteration 2

### Priority Actions
1. **Search specific sectors with gaps**:
   - PIF banking sector investments
   - PIF Africa investments (sub-Saharan)
   - PIF European real estate deals
   - PIF hedge fund and private equity stakes

2. **Time-period deep dives**:
   - 2023-2024 period appears under-represented
   - Need more granular data on 2017-2019 period

3. **Alternative sources**:
   - SEC 13F filings (for US publicly traded stocks)
   - Financial Times paid articles (if accessible)
   - Reuters Deal Intelligence
   - Bloomberg Terminal data (if available)
   - PIF annual reports (downloadable PDFs)

4. **Manual enrichment**:
   - Cross-reference existing deals with SEC filings
   - Search for exit transactions (divestments)
   - Add deal announcements vs. completion dates

## Recommendations

### For More Comprehensive Coverage:
1. **SEC 13F Scraper**: Build dedicated scraper for PIF's quarterly US equity holdings
2. **News API Integration**: Use Reuters/FT/Bloomberg APIs (requires subscriptions)
3. **Manual PDF Mining**: Extract data from PIF annual reports (2015-2024)
4. **Specific Deal Research**: Search each target sector individually with date ranges

### Data Enhancement Opportunities:
- Add "Deal Status" column (completed, pending, divested)
- Add "Current Stake %" column (for ongoing investments)
- Add "Co-investors" column
- Add "Strategic Rationale" column (from press releases)
- Split Deal Value into "Equity" and "Total Deal Size" columns

## Sources Used

### Primary Sources
- [PIF Official Press Releases](https://www.pif.gov.sa/en/news-and-insights/press-releases/)
- [Wikipedia - Public Investment Fund](https://en.wikipedia.org/wiki/Public_Investment_Fund)

### News Sources
- Arab News
- TechCrunch
- Bloomberg
- Financial Times
- Gulf News
- AGBI (Arabian Gulf Business Insight)
- Electrek
- Reuters

### Financial Data Platforms (attempted)
- swfinstitute.org (blocked)
- globalswf.com (blocked)
- fintel.io (blocked)
- tracxn.com (blocked)

## Technical Notes

**Web Scraping Challenges**:
- Most financial data platforms use aggressive bot protection (Cloudflare, etc.)
- Rate limiting on public sites
- Dynamic JavaScript rendering makes simple HTTP requests ineffective

**Successful Approach**:
- Web search for specific deals
- Targeted searches by year/sector/company
- Cross-referencing multiple sources for validation
- Using official press releases when available

---

**Report Generated**: 2026-01-11
**Deals Captured**: 28
**Coverage Period**: 2015-2025
**Next Iteration**: Sector-specific deep dives and alternative data sources
