import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>TRILLI ON FINANCIAL SUITE</title>
        <meta property="og:title" content="Happy Joint Skunk" />
      </Helmet>
      <Navbar8
        page4Description={
          <Fragment>
            <span className="home-text100">Page Four Description</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text101">Main Action</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text102">#trillion-bank</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text103">Home</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text104">#home</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text105">Payment Gateway</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text106">Trill On Bank</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text107">#payment-gateway</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text108">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text109">Page Two Description</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text110">#digital-wallet</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text111">Digital Wallet</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">Page Three Description</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text113">Secondary Action</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action2={
          <Fragment>
            <span className="home-text114">Secondary action</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text115">Main action</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text116">
              Welcome to  Trilli On Financial Suite
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text117">
              Experience the future of finance with our innovative trilli on
              financial suite. Explore our range of products designed to
              revolutionize the way you invest and manage your assets.
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature3Description={
          <Fragment>
            <span className="home-text118">
              Experience seamless and secure transactions with our cutting-edge
              blockchain system.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text119">3D BLOKCHAIN - BIODIGITAL SUPREMACY</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text120">
              Make quick and easy payments with our efficient payment gateway.
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text121">TRILLI ON Bank</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text122">
              Manage your finances effectively with our innovative banking
              services.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text123">TRILLI PAY</span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        heading1={
          <Fragment>
            <span className="home-text124">Ready to invest in the future?</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Explore our products and start your journey with NEO TRILLI AO
              today.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text126">Get started</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        
        feature1Title={
          <Fragment>
            <span className="home-text130">TRI FONE</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text128">
              Experience all trilli apps and more with the future of mobile phones with all the latest technologies at your fingertips.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text129">TRILLI ON IT - MONEY WALLET</span>
          </Fragment>
        }
        
        feature2Description={
          <Fragment>
            <span className="home-text131">
              Safely store and manage your digital assets with our advanced
              digital wallet. Access your funds anytime, anywhere.
            </span>
          </Fragment>
        }
       
      ></Features25>
      <Pricing14
        plan3Price={
          <Fragment>
            <span className="home-text133">$299</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text134">Subscribe Now</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text135">Basic plan</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text136">Subscribe Now</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text137">Enterprise plan</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text138">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text139">Digital Wallet Included</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text140">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text141">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text142">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text143">Blockchain System Access</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text144">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text145">Feature text goes here</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text146">$1999</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text147">Get started</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148">Subscribe Now</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text149">
              Full Trillion Financial Suite Access
            </span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text150">Digital Wallet Included</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text151">$200/yr</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text152">Business plan</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text153">Feature text goes here</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text154">Get started</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text155">All Products Included</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text156">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text157">Neo Trillao Phone</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text158">Pricing plan</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text159">Feature text goes here</span>
          </Fragment>
        }
        plan1={
          <Fragment>
            <span className="home-text160">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text161">Business plan</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text162">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text163">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text164">Feature text goes here</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text165">or $29 monthly</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text166">$199</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text167">or $49 monthly</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text168">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text169">Feature text goes here</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text170">or $20 monthly</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text171">$299/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text172">$2999</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text174">$499/yr</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text176">Payment Gateway Integration</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text177">$999</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text178">Access to Neo Trillao Bank</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text179">Priority Support</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text180">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text183">Get started</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text184">$99</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text185">Enterprise plan</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Description={
          <Fragment>
            <span className="home-text186">
              Create an account on Neo Trillao&apos;s platform to access all the
              financial suite products.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text187">
              Click on &apos;Learn More&apos; to delve deeper into each
              product&apos;s features and benefits.
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text188">
              Explore the Trillion Financial Suite
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text189">
              Discover the range of products offered by Neo Trillao, including a
              bank, digital wallet, payment gateway, phone, and blockchain
              system.
            </span>
          </Fragment>
        }
        step1Title={
          <Fragment>
            <span className="home-text190">Sign Up for Neo Trillao</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text191">
              Learn More About Specific Products
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text192">
              Ready to invest? Simply click on the &apos;Invest&apos; button on
              the product page to start your journey with Neo Trillao.
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text193">Invest in Your Future</span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        author2Position={
          <Fragment>
            <span className="home-text194">Entrepreneur</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text195">Investor</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text196">John Doe</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text197">Michael Johnson</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text198">
              As an entrepreneur, I rely on Neo trill ao&apos;s financial suite
              to handle all my transactions efficiently. The payment gateway is
              secure and reliable, giving me peace of mind in my business
              dealings.
            </span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text199">Jane Smith</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text200">Digital Marketer</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text201">Sarah Lee</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text202">
              I have been using Neo trill ao&apos;s financial suite for a while
              now, and I must say it has exceeded my expectations. The products
              are innovative and user-friendly, making my investment journey
              smooth and profitable.
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text203">Tech Enthusiast</span>
          </Fragment>
        }
        review1={
          <Fragment>
            <span className="home-text204">
              Neo trill ao has truly revolutionized the way I manage my
              finances. I highly recommend their services to anyone looking to
              grow their investments.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text205">Testimonials</span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text206">
              Neo trill ao&apos;s blockchain system is a game-changer in the
              tech industry. Its transparency and security features make it
              stand out from other platforms. I am excited to see where this
              technology takes us in the future.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text207">
              I have been using Neo trill ao&apos;s digital wallet for my online
              transactions, and I am impressed by its convenience and speed. It
              has made my financial transactions hassle-free and efficient.
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text208">
              Feel free to reach out to us for any inquiries or investment
              opportunities.
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text209">
              123 Tech Street, Neo City, Trillionland
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text210">Contact Us</span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text211">
              456 Finance Avenue, Digital District, Trillionland
            </span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text212">Neo Trillao Headquarters</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text213">Investment Office</span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link5={
          <Fragment>
            <span className="home-text214">Blockchain System</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text215">Payment Gateway</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text216">Bank</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text217">Terms and Conditions</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text218">Digital Wallet</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text219">Phone</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text220">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text221">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
