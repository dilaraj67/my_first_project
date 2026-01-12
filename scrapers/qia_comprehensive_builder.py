#!/usr/bin/env python3
"""
QIA Investment Deals - COMPREHENSIVE FINAL DATABASE
All major Qatar Investment Authority investment deals from 2015 to present
Compiled from: AGBI, Wikipedia, Global Finance, Tracxn, Arabian Business,
IntellWings, Labiotech, TechCrunch, Gulf Times, Middle East Eye, and more

FINAL COMPREHENSIVE VERSION - All verified deals included
"""

import pandas as pd
from datetime import datetime

class QIAComprehensiveDatabase:
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
                'geography': 'Global/Multi-region',
                'value': '$20 billion',
                'deal_type': 'Joint Venture',
                'source': 'AGBI',
                'url': 'https://www.agbi.com/companies/qatar-investment-authority/'
            },
            {
                'year': 2025,
                'company': 'Daya Anagata Nusantara (Indonesia Sovereign Fund)',
                'sector': 'Multi-sector (Renewables, Healthcare, Tech)',
                'geography': 'Asia - Emerging',
                'value': '$4 billion',
                'deal_type': 'Joint Fund',
                'source': 'AGBI, Oxford Business Group',
                'url': 'https://oxfordbusinessgroup.com/reports/qatar/2025-report/'
            },
            {
                'year': 2025,
                'company': 'Janus Henderson Investors',
                'sector': 'Financial Services/Asset Management',
                'geography': 'Global/Multi-region',
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
                'value': '$4.05 billion (5% stake)',
                'deal_type': 'Equity Investment',
                'source': 'AGBI, TechCrunch',
                'url': 'https://www.agbi.com/companies/qatar-investment-authority/'
            },
            {
                'year': 2025,
                'company': 'Isagen (Colombia)',
                'sector': 'Energy/Infrastructure',
                'geography': 'Latin America',
                'value': '$500 million',
                'deal_type': 'Stake Increase to 15%',
                'source': 'AGBI',
                'url': 'https://www.agbi.com/companies/qatar-investment-authority/'
            },
            {
                'year': 2025,
                'company': 'Ivanhoe Mines',
                'sector': 'Mining/Natural Resources',
                'geography': 'Sub-Saharan Africa',
                'value': '$500 million',
                'deal_type': 'Equity Investment (~4% stake)',
                'source': 'AGBI',
                'url': 'https://www.agbi.com/companies/qatar-investment-authority/'
            },
            {
                'year': 2025,
                'company': 'Rebel Foods (follow-on)',
                'sector': 'Technology/Food Tech',
                'geography': 'Asia - Emerging',
                'value': '$25 million',
                'deal_type': 'Follow-on Investment',
                'source': 'IntellWings',
                'url': 'https://intelliwings.com/blogposts/2025/04/01/the-qatar-investment-authority-a-small-nations-portfolio-powerhouse/'
            },
            {
                'year': 2025,
                'company': 'India Infrastructure Commitment',
                'sector': 'Infrastructure/Technology/Manufacturing',
                'geography': 'Asia - Emerging',
                'value': '$10 billion',
                'deal_type': 'Strategic Commitment',
                'source': 'Oxford Business Group',
                'url': 'https://oxfordbusinessgroup.com/reports/qatar/2025-report/'
            },
            {
                'year': 2025,
                'company': 'African Infrastructure & Mining (DRC, Mozambique, Zambia, Zimbabwe, Botswana, Burundi)',
                'sector': 'Mining/Infrastructure/Energy/Agriculture',
                'geography': 'Sub-Saharan Africa',
                'value': '$103 billion',
                'deal_type': 'Strategic Investment Pledge',
                'source': 'ByTheEast, Oxford Business Group',
                'url': 'https://www.bytheeast.com/2025/10/06/qatars-push-into-africas-critical-minerals-seduction-or-substance/'
            },
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
                'geography': 'Europe (excluding UK)',
                'value': '$2.63 billion (€2.4B)',
                'deal_type': 'Strategic Equity Investment',
                'source': 'Wikipedia, AGBI',
                'url': 'https://en.wikipedia.org/wiki/Qatar_Investment_Authority'
            },
            {
                'year': 2024,
                'company': 'ChinaAMC',
                'sector': 'Financial Services/Asset Management',
                'geography': 'Asia - Emerging',
                'value': 'Undisclosed',
                'deal_type': '10% Stake Agreement (pending regulatory approval)',
                'source': 'AGBI, Oxford Business Group',
                'url': 'https://www.agbi.com/companies/qatar-investment-authority/'
            },
            {
                'year': 2024,
                'company': 'Kokusai Electric',
                'sector': 'Technology/Semiconductors',
                'geography': 'Asia - Developed',
                'value': 'Undisclosed',
                'deal_type': '5% Stake',
                'source': 'AGBI, TechCrunch',
                'url': 'https://www.agbi.com/companies/qatar-investment-authority/'
            },
            {
                'year': 2024,
                'company': "McDonald's China/Hong Kong (via Trustar Capital)",
                'sector': 'Retail/Consumer/Food',
                'geography': 'Asia - Emerging',
                'value': '$1 billion',
                'deal_type': 'Continuation Fund (Anchor Investor)',
                'source': 'AGBI',
                'url': 'https://www.agbi.com/companies/qatar-investment-authority/'
            },
            {
                'year': 2024,
                'company': 'xAI (earlier round)',
                'sector': 'Technology/AI',
                'geography': 'United States',
                'value': '$6 billion (Series C participation)',
                'deal_type': 'Series C Funding Round',
                'source': 'TechCrunch, AGBI',
                'url': 'https://techcrunch.com/2024/02/26/qia-to-invest-1-billion-in-international-and-regional-venture-capital-funds/'
            },
            {
                'year': 2024,
                'company': 'QIA Fund of Funds Program',
                'sector': 'Venture Capital/Multi-sector',
                'geography': 'Global/Multi-region',
                'value': '$1 billion',
                'deal_type': 'Fund of Funds (VC Program)',
                'source': 'TechCrunch, QIA',
                'url': 'https://techcrunch.com/2024/02/26/qia-to-invest-1-billion-in-international-and-regional-venture-capital-funds/'
            },
        ]
        self.deals.extend(deals_2024)

    def add_deals_2023(self):
        """Add major deals from 2023"""
        deals_2023 = [
            {
                'year': 2023,
                'company': 'Reliance Retail Ventures',
                'sector': 'Retail/Consumer',
                'geography': 'Asia - Emerging',
                'value': '$1 billion',
                'deal_type': '1% Stake',
                'source': 'Wikipedia, AGBI',
                'url': 'https://en.wikipedia.org/wiki/Qatar_Investment_Authority'
            },
            {
                'year': 2023,
                'company': 'Builder.ai',
                'sector': 'Technology/Software',
                'geography': 'UK',
                'value': '$250 million',
                'deal_type': 'Series D Funding (Led by QIA)',
                'source': 'AGBI, TechCrunch',
                'url': 'https://www.agbi.com/companies/qatar-investment-authority/'
            },
            {
                'year': 2023,
                'company': 'Credit Suisse Group',
                'sector': 'Banks/Financial Services',
                'geography': 'Europe (excluding UK)',
                'value': 'Undisclosed',
                'deal_type': 'Stake Doubled to 6% (became 2nd largest shareholder)',
                'source': 'AGBI, Global SWF',
                'url': 'https://www.agbi.com/companies/qatar-investment-authority/'
            },
            {
                'year': 2023,
                'company': 'The North Road Company',
                'sector': 'Infrastructure',
                'geography': 'Australia/Oceania',
                'value': '$150 million',
                'deal_type': 'Strategic Investment',
                'source': 'AGBI, TechCrunch',
                'url': 'https://www.agbi.com/companies/qatar-investment-authority/'
            },
            {
                'year': 2023,
                'company': 'Insider (Turkish AI Platform)',
                'sector': 'Technology/AI/Marketing',
                'geography': 'Middle East & North Africa',
                'value': '$105 million',
                'deal_type': 'Co-investment with Esas Private Equity',
                'source': 'TechCrunch, AGBI',
                'url': 'https://www.agbi.com/companies/qatar-investment-authority/'
            },
            {
                'year': 2023,
                'company': 'Kingdee International Software',
                'sector': 'Technology/Software/Enterprise',
                'geography': 'Asia - Emerging',
                'value': 'Undisclosed',
                'deal_type': '4.26% Stake Acquisition',
                'source': 'TechCrunch, Crunchbase',
                'url': 'https://www.crunchbase.com/organization/qatar-investment-authority'
            },
            {
                'year': 2023,
                'company': 'Park Lane Hotel (New York)',
                'sector': 'Real Estate/Hospitality',
                'geography': 'United States',
                'value': 'Undisclosed',
                'deal_type': 'Acquisition',
                'source': 'AGBI',
                'url': 'https://www.agbi.com/companies/qatar-investment-authority/'
            },
            {
                'year': 2023,
                'company': 'Paris Saint-Germain (stake sale)',
                'sector': 'Sports/Entertainment',
                'geography': 'Europe (excluding UK)',
                'value': '€530 million (sold 12.5% to Arctos Partners)',
                'deal_type': 'Partial Divestiture (retained 87.5%)',
                'source': 'Business Wire, ESPN',
                'url': 'https://www.businesswire.com/news/home/20231207539913/en/'
            },
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
                'source': 'AGBI, TechCrunch',
                'url': 'https://www.agbi.com/companies/qatar-investment-authority/'
            },
            {
                'year': 2022,
                'company': 'Swiggy',
                'sector': 'Technology/Food Tech',
                'geography': 'Asia - Emerging',
                'value': '$700 million',
                'deal_type': 'Funding Round Participation',
                'source': 'AGBI',
                'url': 'https://www.agbi.com/companies/qatar-investment-authority/'
            },
            {
                'year': 2022,
                'company': 'Innovafeed',
                'sector': 'AgTech/Food',
                'geography': 'Europe (excluding UK)',
                'value': '$250 million',
                'deal_type': 'Funding Round (Led by QIA)',
                'source': 'AGBI',
                'url': 'https://www.agbi.com/companies/qatar-investment-authority/'
            },
            {
                'year': 2022,
                'company': 'Rolls-Royce SMR (Small Modular Reactor)',
                'sector': 'Energy/Nuclear',
                'geography': 'UK',
                'value': 'Undisclosed',
                'deal_type': 'Strategic Investment',
                'source': 'Oxford Business Group',
                'url': 'https://oxfordbusinessgroup.com/reports/qatar/2025-report/'
            },
        ]
        self.deals.extend(deals_2022)

    def add_deals_2021(self):
        """Add major deals from 2021"""
        deals_2021 = [
            {
                'year': 2021,
                'company': 'Trendyol',
                'sector': 'Retail/E-commerce',
                'geography': 'Middle East & North Africa',
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
                'geography': 'Asia - Emerging',
                'value': '$175 million',
                'deal_type': 'Funding Round (Led by QIA)',
                'source': 'Wikipedia, IntellWings',
                'url': 'https://intelliwings.com/blogposts/2025/04/01/the-qatar-investment-authority-a-small-nations-portfolio-powerhouse/'
            },
            {
                'year': 2021,
                'company': 'Sub-Saharan African Renewable Energy Platform (with Enel)',
                'sector': 'Infrastructure/Renewables',
                'geography': 'Sub-Saharan Africa',
                'value': 'Undisclosed',
                'deal_type': 'Platform Investment/Joint Venture',
                'source': 'Tamarindo, Oxford Business Group',
                'url': 'https://tamarindo.global/insight/analysis/is-qatar-eyeing-a-renewables-revolution/'
            },
        ]
        self.deals.extend(deals_2021)

    def add_deals_2020(self):
        """Add major deals from 2020"""
        deals_2020 = [
            {
                'year': 2020,
                'company': 'CureVac',
                'sector': 'Biotech/Healthcare',
                'geography': 'Europe (excluding UK)',
                'value': 'Undisclosed',
                'deal_type': 'Strategic Investment (mRNA COVID vaccine development)',
                'source': 'Labiotech',
                'url': 'https://www.labiotech.eu/in-depth/qatar-investment-authority-biotech/'
            },
            {
                'year': 2020,
                'company': 'Fluence Energy (Siemens/AES JV)',
                'sector': 'Energy Storage/Infrastructure',
                'geography': 'United States',
                'value': '$125 million',
                'deal_type': 'Strategic Investment',
                'source': 'Oxford Business Group, Tamarindo',
                'url': 'https://tamarindo.global/insight/analysis/is-qatar-eyeing-a-renewables-revolution/'
            },
        ]
        self.deals.extend(deals_2020)

    def add_deals_2019(self):
        """Add major deals from 2019"""
        deals_2019 = [
            {
                'year': 2019,
                'company': "BYJU'S",
                'sector': 'Technology/EdTech',
                'geography': 'Asia - Emerging',
                'value': '$150 million',
                'deal_type': 'Funding Round (Led by QIA)',
                'source': 'Tracxn',
                'url': 'https://tracxn.com/d/acquisitions/acquisitions-by-qatar-investment-authority/'
            },
            {
                'year': 2019,
                'company': 'Fifth Avenue & Times Square Retail Properties (with Crown Acquisitions)',
                'sector': 'Real Estate/Retail',
                'geography': 'United States',
                'value': '$5.6 billion portfolio (24% stake)',
                'deal_type': 'Co-investment in Vornado Portfolio',
                'source': 'Gulf Times, AGBI',
                'url': 'https://www.gulf-times.com/story/629616/QIA-Crown-acquire-iconic-retail-properties-in-New-York'
            },
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
                'company': 'The Plaza Hotel (New York)',
                'sector': 'Real Estate/Hospitality',
                'geography': 'United States',
                'value': '$600 million',
                'deal_type': 'Full Acquisition via Katara Hospitality',
                'source': 'The Real Deal, Fortune',
                'url': 'https://therealdeal.com/new-york/2018/07/03/qatari-group-closes-on-600m-purchase-of-plaza/'
            },
            {
                'year': 2018,
                'company': 'Grosvenor House Hotel (London)',
                'sector': 'Real Estate/Hospitality',
                'geography': 'UK',
                'value': 'Undisclosed',
                'deal_type': 'Acquisition via Katara Hospitality',
                'source': 'Euronews, CPP-Luxury',
                'url': 'https://www.euronews.com/2018/11/06/qatar-agrees-to-buy-londons-grosvenor-house-hotel-source'
            },
            {
                'year': 2018,
                'company': 'Veolia Environnement',
                'sector': 'Infrastructure/Utilities',
                'geography': 'Europe (excluding UK)',
                'value': 'Undisclosed',
                'deal_type': 'Divestiture (sold 4.6% stake)',
                'source': 'Tracxn',
                'url': 'https://tracxn.com/d/acquisitions/acquisitions-by-qatar-investment-authority/'
            },
            {
                'year': 2018,
                'company': 'Lifestyle International Holdings',
                'sector': 'Retail',
                'geography': 'Asia - Developed',
                'value': 'Undisclosed',
                'deal_type': 'Divestiture (sold entire 23.16% stake)',
                'source': 'Tracxn',
                'url': 'https://tracxn.com/d/acquisitions/acquisitions-by-qatar-investment-authority/'
            },
            {
                'year': 2018,
                'company': 'Santander Brasil',
                'sector': 'Banks/Financial Services',
                'geography': 'Latin America',
                'value': '$737 million',
                'deal_type': 'Partial Divestiture (sold 40% of 5.5% stake)',
                'source': 'Gulf Times, PR Newswire',
                'url': 'https://www.gulf-times.com/story/543394/QIA-sells-stake-worth-737mn-in-Banco-Santander-Bra'
            },
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
            },
        ]
        self.deals.extend(deals_2017)

    def add_deals_2016(self):
        """Add major deals from 2016"""
        deals_2016 = [
            {
                'year': 2016,
                'company': 'National Grid UK Gas Distribution',
                'sector': 'Infrastructure/Utilities',
                'geography': 'UK',
                'value': 'Undisclosed (multi-billion)',
                'deal_type': '61% Acquisition (Consortium with Macquarie, Allianz, Hermes, CIC)',
                'source': 'Tracxn',
                'url': 'https://tracxn.com/d/acquisitions/acquisitions-by-qatar-investment-authority/'
            },
            {
                'year': 2016,
                'company': 'Balmain (French Fashion House)',
                'sector': 'Retail/Luxury/Fashion',
                'geography': 'Europe (excluding UK)',
                'value': '€485 million',
                'deal_type': 'Acquisition via Mayhoola for Investments',
                'source': 'IntellWings, Arabian Business',
                'url': 'https://intelliwings.com/blogposts/2025/04/01/the-qatar-investment-authority-a-small-nations-portfolio-powerhouse/'
            },
            {
                'year': 2016,
                'company': 'U.S. Infrastructure Investment Commitment',
                'sector': 'Infrastructure',
                'geography': 'United States',
                'value': '$10 billion',
                'deal_type': 'Investment Commitment',
                'source': 'Oxford Business Group',
                'url': 'https://oxfordbusinessgroup.com/reports/qatar/2025-report/'
            },
        ]
        self.deals.extend(deals_2016)

    def add_deals_2015(self):
        """Add major deals from 2015"""
        deals_2015 = [
            {
                'year': 2015,
                'company': 'Canary Wharf Group',
                'sector': 'Real Estate',
                'geography': 'UK',
                'value': 'Undisclosed (multi-billion)',
                'deal_type': '50% Stake Acquisition',
                'source': 'Wikipedia, Global Finance',
                'url': 'https://gfmag.com/economics-policy-regulation/qia-key-investments/'
            },
            {
                'year': 2015,
                'company': 'Manhattan West Development (with Brookfield)',
                'sector': 'Real Estate/Infrastructure',
                'geography': 'United States',
                'value': 'Undisclosed',
                'deal_type': '44% Stake in Joint Venture',
                'source': 'The World Folio',
                'url': 'https://www.theworldfolio.com/news/qatar-to-invest-35bn/4186/'
            },
            {
                'year': 2015,
                'company': 'Excelsior Hotel Gallia (Milan)',
                'sector': 'Real Estate/Hospitality',
                'geography': 'Europe (excluding UK)',
                'value': 'Undisclosed',
                'deal_type': 'Acquisition via Katara Hospitality',
                'source': 'Katara Hospitality',
                'url': 'https://www.katarahospitality.com/'
            },
            {
                'year': 2015,
                'company': 'InterContinental Hotels - Five Properties (Carlton Cannes, Amstel Amsterdam, Madrid, Frankfurt, De La Ville Rome)',
                'sector': 'Real Estate/Hospitality',
                'geography': 'Europe (excluding UK)',
                'value': 'Undisclosed',
                'deal_type': 'Acquisition via Katara Hospitality',
                'source': 'Hospitality ON, LoyaltyLobby',
                'url': 'https://loyaltylobby.com/2014/06/27/katara-buys-five-intercontinental-hotels-in-europe/'
            },
            {
                'year': 2015,
                'company': 'The Savoy Hotel (London)',
                'sector': 'Real Estate/Hospitality',
                'geography': 'UK',
                'value': 'Undisclosed',
                'deal_type': '50% Stake via Katara Hospitality',
                'source': 'Middle East Eye, Arabian Business',
                'url': 'https://www.middleeasteye.net/news/qatar-firm-buys-50-percent-londons-storied-savoy-hotel'
            },
            {
                'year': 2015,
                'company': 'Deutsche Bank',
                'sector': 'Banks/Financial Services',
                'geography': 'Europe (excluding UK)',
                'value': 'Undisclosed',
                'deal_type': '6.1% Stake Acquisition',
                'source': 'Finews Asia, Bloomberg',
                'url': 'https://www.finews.asia/finance/28153-deutsche-bank-gets-additional-investment-from-qatar'
            },
        ]
        self.deals.extend(deals_2015)

    def add_major_holdings(self):
        """Add major ongoing holdings (established pre-2015 or exact dates unclear)"""
        major_holdings = [
            {
                'year': 2015,
                'company': 'Harrods',
                'sector': 'Retail/Luxury',
                'geography': 'UK',
                'value': 'Undisclosed',
                'deal_type': 'Full Ownership (acquired 2010, held through period)',
                'source': 'Wikipedia, Arabian Business',
                'url': 'https://www.arabianbusiness.com/revealed-qatar-investment-authority-s-investments-across-world-674254.html'
            },
            {
                'year': 2015,
                'company': 'The Shard',
                'sector': 'Real Estate',
                'geography': 'UK',
                'value': 'Undisclosed',
                'deal_type': 'Ownership (95% via Qatari Diar)',
                'source': 'Wikipedia, Arabian Business',
                'url': 'https://www.arabianbusiness.com/revealed-qatar-investment-authority-s-investments-across-world-674254.html'
            },
            {
                'year': 2015,
                'company': 'Heathrow Airport',
                'sector': 'Infrastructure/Transportation',
                'geography': 'UK',
                'value': 'Undisclosed',
                'deal_type': '20% Stake',
                'source': 'Global Finance',
                'url': 'https://gfmag.com/economics-policy-regulation/qia-key-investments/'
            },
            {
                'year': 2015,
                'company': 'Volkswagen AG',
                'sector': 'Automotive/Industrial',
                'geography': 'Europe (excluding UK)',
                'value': 'Undisclosed (multi-billion)',
                'deal_type': '~17% Stake (Largest Shareholder)',
                'source': 'Arabian Business, Wikipedia',
                'url': 'https://www.arabianbusiness.com/revealed-qatar-investment-authority-s-investments-across-world-674254.html'
            },
            {
                'year': 2015,
                'company': 'Barclays',
                'sector': 'Banks/Financial Services',
                'geography': 'UK',
                'value': '€7.5 billion (2008 investment)',
                'deal_type': '12.7% Stake',
                'source': 'The National, Arabian Business',
                'url': 'https://www.thenational.ae/business/qatar-a-portfolio-that-will-only-grow-bigger-1.464198'
            },
            {
                'year': 2015,
                'company': 'Porsche',
                'sector': 'Automotive/Industrial',
                'geography': 'Europe (excluding UK)',
                'value': 'Undisclosed',
                'deal_type': 'Strategic Equity Stake',
                'source': 'Arabian Business',
                'url': 'https://www.arabianbusiness.com/revealed-qatar-investment-authority-s-investments-across-world-674254.html'
            },
            {
                'year': 2015,
                'company': 'Iberdrola',
                'sector': 'Energy/Infrastructure',
                'geography': 'Europe (excluding UK)',
                'value': 'Undisclosed',
                'deal_type': 'Strategic Equity Stake',
                'source': 'Wikipedia',
                'url': 'https://en.wikipedia.org/wiki/Qatar_Investment_Authority'
            },
            {
                'year': 2015,
                'company': 'Hochtief',
                'sector': 'Construction/Industrial',
                'geography': 'Europe (excluding UK)',
                'value': 'Undisclosed',
                'deal_type': 'Strategic Equity Stake',
                'source': 'Arabian Business',
                'url': 'https://www.arabianbusiness.com/revealed-qatar-investment-authority-s-investments-across-world-674254.html'
            },
            {
                'year': 2015,
                'company': 'Sainsbury (UK Supermarket)',
                'sector': 'Retail/Consumer',
                'geography': 'UK',
                'value': 'Undisclosed',
                'deal_type': '22% Stake',
                'source': 'IntellWings',
                'url': 'https://intelliwings.com/blogposts/2025/04/01/the-qatar-investment-authority-a-small-nations-portfolio-powerhouse/'
            },
            {
                'year': 2013,
                'company': 'Printemps (Paris Department Store)',
                'sector': 'Retail/Luxury',
                'geography': 'Europe (excluding UK)',
                'value': 'Undisclosed',
                'deal_type': 'Acquisition via Divine Investments SA',
                'source': 'Electrik Coast, IntellWings',
                'url': 'https://www.electrikcoast.com/blog/printemps-nyc-qatars-latest-luxury-investment-in-new-york-city'
            },
            {
                'year': 2012,
                'company': 'Valentino (Italian Fashion House)',
                'sector': 'Retail/Luxury/Fashion',
                'geography': 'Europe (excluding UK)',
                'value': '$850 million',
                'deal_type': 'Acquisition via Mayhoola for Investments',
                'source': 'IntellWings, Arabian Business',
                'url': 'https://intelliwings.com/blogposts/2025/04/01/the-qatar-investment-authority-a-small-nations-portfolio-powerhouse/'
            },
            {
                'year': 2012,
                'company': 'Paris Saint-Germain FC',
                'sector': 'Sports/Entertainment',
                'geography': 'Europe (excluding UK)',
                'value': 'Undisclosed (became 100% owner)',
                'deal_type': 'Full Acquisition via Qatar Sports Investments',
                'source': 'Wikipedia, Business Wire',
                'url': 'https://en.wikipedia.org/wiki/Qatar_Sports_Investments'
            },
            {
                'year': 2015,
                'company': 'Adani Green Energy',
                'sector': 'Energy/Renewables',
                'geography': 'Asia - Emerging',
                'value': 'Undisclosed',
                'deal_type': 'Equity Investment',
                'source': 'Oxford Business Group',
                'url': 'https://oxfordbusinessgroup.com/reports/qatar/2025-report/'
            },
            {
                'year': 2015,
                'company': 'QuantumScape (EV Battery Developer)',
                'sector': 'Technology/Energy Storage',
                'geography': 'United States',
                'value': 'Undisclosed',
                'deal_type': 'Strategic Investment',
                'source': 'Oxford Business Group',
                'url': 'https://oxfordbusinessgroup.com/reports/qatar/2025-report/'
            },
            {
                'year': 2015,
                'company': 'Ascend Elements (Battery Materials)',
                'sector': 'Technology/Energy Storage',
                'geography': 'United States',
                'value': 'Undisclosed',
                'deal_type': 'Strategic Investment',
                'source': 'Oxford Business Group',
                'url': 'https://oxfordbusinessgroup.com/reports/qatar/2025-report/'
            },
        ]
        self.deals.extend(major_holdings)

    def build_database(self):
        """Build complete comprehensive deals database"""
        print("Building COMPREHENSIVE QIA Deals Database...")
        print("=" * 70)

        self.add_deals_2025()
        print(f"✓ Added 2025 deals (12 deals)")

        self.add_deals_2024()
        print(f"✓ Added 2024 deals (7 deals)")

        self.add_deals_2023()
        print(f"✓ Added 2023 deals (8 deals)")

        self.add_deals_2022()
        print(f"✓ Added 2022 deals (4 deals)")

        self.add_deals_2021()
        print(f"✓ Added 2021 deals (4 deals)")

        self.add_deals_2020()
        print(f"✓ Added 2020 deals (2 deals)")

        self.add_deals_2019()
        print(f"✓ Added 2019 deals (2 deals)")

        self.add_deals_2018()
        print(f"✓ Added 2018 deals (6 deals)")

        self.add_deals_2017()
        print(f"✓ Added 2017 deals (1 deal)")

        self.add_deals_2016()
        print(f"✓ Added 2016 deals (3 deals)")

        self.add_deals_2015()
        print(f"✓ Added 2015 deals (6 deals)")

        self.add_major_holdings()
        print(f"✓ Added major holdings and earlier acquisitions (15 deals)")

        print("=" * 70)
        print(f"✅ TOTAL COMPREHENSIVE DEALS COMPILED: {len(self.deals)}")

    def export_to_files(self, base_filename="qia_comprehensive_deals"):
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
            df.to_excel(writer, index=False, sheet_name='QIA Comprehensive 2015-2025')

            # Get the worksheet
            worksheet = writer.sheets['QIA Comprehensive 2015-2025']

            # Auto-adjust column widths
            for idx, col in enumerate(df.columns):
                max_length = max(
                    df[col].astype(str).apply(len).max(),
                    len(col)
                )
                worksheet.column_dimensions[chr(65 + idx)].width = min(max_length + 2, 50)

        print("\n" + "=" * 70)
        print("📊 COMPREHENSIVE EXPORT COMPLETE")
        print("=" * 70)
        print(f"CSV File:   {csv_path}")
        print(f"Excel File: {excel_path}")
        print(f"\nTotal Deals: {len(df)}")

        return df

    def print_summary(self, df):
        """Print comprehensive summary statistics"""
        print("\n" + "=" * 70)
        print("📈 COMPREHENSIVE SUMMARY STATISTICS")
        print("=" * 70)

        print(f"\n📅 Deals by Year:")
        year_counts = df['Deal Year'].value_counts().sort_index(ascending=False)
        for year, count in year_counts.items():
            print(f"   {year}: {count} deals")

        print(f"\n🏢 Top Sectors:")
        sector_counts = df['Sector'].value_counts().head(15)
        for sector, count in sector_counts.items():
            print(f"   {sector}: {count} deals")

        print(f"\n🌍 Deals by Geography (Granular Taxonomy):")
        geo_counts = df['Geography'].value_counts()
        for geo, count in geo_counts.items():
            print(f"   {geo}: {count} deals")

        print(f"\n💼 Top Deal Types:")
        type_counts = df['Deal Type'].value_counts().head(15)
        for deal_type, count in type_counts.items():
            print(f"   {deal_type}: {count} deals")

        # Extract deals with disclosed values
        disclosed_values = df[~df['Deal Value (USD)'].str.contains('Undisclosed', case=False, na=False)]
        print(f"\n💰 Deals with Disclosed Values: {len(disclosed_values)}/{len(df)}")

        # Calculate approximate total disclosed value (rough estimate)
        print(f"\n💵 Notable Large Deals (>$1B disclosed):")
        large_deals = df[df['Deal Value (USD)'].str.contains('billion', case=False, na=False)]
        for _, row in large_deals.head(20).iterrows():
            print(f"   {row['Deal Year']}: {row['Target Company']} - {row['Deal Value (USD)']}")

        print("\n" + "=" * 70)
        print("🎯 MOST RECENT 20 DEALS")
        print("=" * 70)
        print(df[['Deal Year', 'Target Company', 'Sector', 'Geography', 'Deal Value (USD)']].head(20).to_string(index=False))


def main():
    """Main execution"""
    print("\n" + "=" * 70)
    print("QIA COMPREHENSIVE INVESTMENT DEALS DATABASE")
    print("Qatar Investment Authority - ALL Major Deals 2015-2025")
    print("FINAL COMPREHENSIVE VERSION")
    print("=" * 70 + "\n")

    # Build database
    db = QIAComprehensiveDatabase()
    db.build_database()

    # Export
    df = db.export_to_files()

    # Print summary
    if df is not None:
        db.print_summary(df)

    print("\n" + "=" * 70)
    print("✅ COMPREHENSIVE DATABASE BUILD COMPLETE")
    print("=" * 70)
    print("\nGeographic Categories Used:")
    print("  • UK")
    print("  • Europe (excluding UK)")
    print("  • United States")
    print("  • Asia - Developed (Japan, South Korea, Singapore, Hong Kong)")
    print("  • Asia - Emerging (China, India, Southeast Asia excl. Singapore)")
    print("  • Middle East & North Africa")
    print("  • Sub-Saharan Africa")
    print("  • Latin America")
    print("  • Australia/Oceania")
    print("  • Global/Multi-region")
    print("\nComprehensive Data Sources:")
    print("  AGBI, Wikipedia, Global Finance, Tracxn, Arabian Business,")
    print("  IntellWings, Labiotech, TechCrunch, Gulf Times, Fortune,")
    print("  The Real Deal, Middle East Eye, Business Wire, Euronews,")
    print("  Oxford Business Group, Tamarindo, ByTheEast, and more")
    print("=" * 70 + "\n")


if __name__ == "__main__":
    main()
