import React from "react"

const JobDetailsPage = () => {
  return (
    <section className="bg-gray-100 h-screen">
      <div className="container mx-auto bg-gray-100 px-3 sm:px-10 lg:px-30 py-10">
        <div className="text-3xl font-light">
          <span className="font-bold">Guthub</span> Jobs
        </div>
        <div className="flex mt-8">
          <div className=" w-72">
            <button className="flex text-blue-500 hover:text-blue-600 font-semibold ">
              <div className="material-icons transform rotate-180 mr-2">
                arrow_right_alt
              </div>
              <div>Back to search</div>
            </button>
            <div className="uppercase font-bold text-gray-400 mt-7">
              How to apply
            </div>
            <div className="mt-4 font-semibold text-blue-900">
              Please email a copy of your resume and online portfolio to
              wes@kasisto.com & CC eric@kasisto.com
            </div>
          </div>

          <div className="ml-20 text-blue-900 w-9/12">
            <h2 className="font-semibold text-2xl flex items-center">
              Front-End Software Engineer
              <span className="text-xs font-bold inline-block ml-4 border rounded px-1 py-0.5 border-blue-900">
                Full Time
              </span>
            </h2>
            <div className="flex items-center text-sm text-gray-400">
              <span className="material-icons text-lg material-icons block mr-1">
                schedule
              </span>
              5 days ago
            </div>
            <div className="mt-8 flex items-center">
              <div className="w-10 h-10 rounded bg-green-400"></div>
              <div className="ml-3">
                <h4 className="text-lg font-semibold ">Kasisto</h4>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="material-icons text-lg material-icons text-gray-400 block mr-1">
                    public
                  </span>
                  New York
                </div>
              </div>
            </div>
            <p className="mt-8">
              Humanizing Digital Experiences® Kasisto’s Digital Experience
              Platform, KAI, is designed for financial institutions to deliver
              the industry’s most amazing Conversational AI powered intelligent
              virtual assistants to their customers. KAI is open and extensible,
              and also fluent in the language of banking and finance. From
              simple retail transactions to the complex demands of corporate
              banks and wealth management, financial institutions can deliver
              meaningful digital interactions with KAI that help build their
              digital brand. Financial institutions around the world use KAI,
              including DBS Bank, J.P. Morgan, Mastercard, Standard Chartered,
              TD Bank, and Manulife Bank among others. They chose KAI for its
              proven track record to drive business results while improving
              customer experiences. The platform is used by millions of
              consumers around the world, all the time, across multiple
              channels, in different languages, and is optimized for
              performance, scalability, security, and compliance. This position
              We are looking for a Full-Stack, client side software engineer to
              help build and integrate responsive chat interfaces, analytics
              dashboards and reporting tools. What you’ll be doing Working
              closely with clients and internal engineering, product and design
              teams to gather requirements Building and integrating front-end
              applications with CSS, HTML, Javascript, jQuery, Vue.js, Webpack,
              Handlebars.js, LESS, Backbone, Python, Django and Java Working to
              improve user experience and functionality for tools Writing
              testable code utilizing common front-end unit and BDD testing
              frameworks What you need for this position 3+ years in client-side
              web development with CSS, HTML, Javascript and jQuery Proven,
              full-stack front-end experience using Python and Django Other
              Modern Web Framework(s) experience is a plus (React, Vue, Angular,
              Ember) Experience working collaboratively to build scalable,
              modular, production software in an Agile environment Experience
              using RESTful json services Node.js and API development
              familiarity is plus D3.js is a plus What we offer: Competitive
              compensation package Ground floor opportunity within rapidly
              growing tech startup Great collaborative team environment Full
              Benefits Fun perks Location - NYC, Flatiron District We welcome
              your cover letter with a description of your previous complete
              experience and your resume. Applicants must be authorized to work
              in the US as we are unable to sponsor. Kasisto is an equal
              opportunity employer.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JobDetailsPage
