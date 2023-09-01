import React from "react";
import "./ContactUsAccordionForm.css";

const ContactUsAccordionForm = () => {
  return (
    <div className="contactUsAccordionForm-parent-div">
      <div className="contactUsAccordionForm-flex-and-text-div">
        <div className="contactUsAccordionForm-flex-div">
          <div className="contactUsAccordionForm-blank-div"></div>
          <h4 className="information-questions">INFORMATION QUESTIONS</h4>
        </div>
        <h1 className="frequently">Frequently Asked Questions</h1>
      </div>
      <div className="accordionForm-children-div contactUsAccordionForm-children-div">
        <details className="details contactUsAccordionForm-details">
          <summary className="summary summary-color">
            How can I get Outsourcing Services for business?
          </summary>
          <div className="p-div">
            <p>
              Enroute has a sophisticatedly designed outsourcing structure that
              has helped businesses reach their peak potential and increase
              operational efficiency since its inception. If you are looking for
              people outsourcing and management support you can contact us
              directly at our outsourcing department and share your needs so we
              can start working on what you need straight away. Contact us
              directly at 01922555373 or email us at boony@enroute.com.bd
            </p>
          </div>
        </details>
        <details className="details contactUsAccordionForm-details">
          <summary className="summary summary-color">
            How can I get Facility Services to develop my business?
          </summary>
          <div className="p-div">
            <p>
              The business facility is an integral part of all businesses.
              However, the time & energy required to establish and maintain the
              business is enormous. That’s why to maintain or set up your
              business facilities outsourcing your need is the right way out. We
              have a team of highly experienced individuals who has the
              competency of developing & delivering all your facility needs. If
              you are seeking for the top-notch facility services simply contact
              us at +𝟖𝟖𝟎𝟗𝟔𝟏𝟎-𝟒𝟎𝟓𝟎𝟔𝟎 or Email: efms@enroute.com.bd
            </p>
          </div>
        </details>
        <details className="details contactUsAccordionForm-details">
          <summary className="summary summary-color">
            How can I get corporate Event Activation support for my company?
          </summary>
          <div className="p-div">
            <p>
              Designing & implementing a successful event or activation campaign
              takes expertise on top of functional know-how. Enroute has the
              perfect team of experts who can lead the way for you so you can
              get the most out of your event activation campaigns. Contact
              Enroute to get your next corporate event in the spotlight. Simply
              contact us at +8809610405060 or email: info@enroute.com.bd
            </p>
          </div>
        </details>
        <details className="details contactUsAccordionForm-details">
          <summary className="summary summary-color">
            Do you have any Training Now?
          </summary>
          <div className="p-div">
            Enroute has a specific department that leads corporate development &
            on job learning opportunities. Under different modalities Enroute
            Center for Development provides executive education for individuals
            & groups. For ongoing individual development training, you can head
            over to our open training platform https://open.ecdl.com.bd/courses/
            as well as visit https://sudoksho.com/ for self-paced learning.
          </div>
        </details>
        <details className="details contactUsAccordionForm-details">
          <summary className="summary summary-color">
            How Can I send my CV?
          </summary>
          <div className="p-div">
            <p>
              As part of our working expertise in sourcing and managing human
              resources we often look for different expertise under different
              departments. You can send your CV to us so when we are looking for
              new recruits we can have a look straight away. Send your CV
              directly at cv@enroute.com.bd.
            </p>
          </div>
        </details>
        <details className="details contactUsAccordionForm-details">
          <summary className="summary summary-color">
            How Can I send my CV?
          </summary>
          <div className="p-div">
            <p>
              As part of our working expertise in sourcing and managing human
              resources we often look for different expertise under different
              departments. You can send your CV to us so when we are looking for
              new recruits we can have a look straight away. Send your CV
              directly at cv@enroute.com.bd.
            </p>
          </div>
        </details>
        <details className="details contactUsAccordionForm-details">
          <summary className="summary summary-color">
            Do you have any Job Now?
          </summary>
          <div className="p-div">
            <p>
              If you are looking for a job we can help you with it if your CV
              fits the current criteria we are hiring for. Visit our dedicated
              website https://emc.com.bd/ or follow us on Facebook & Linkedin to
              get notified about open job positions we are currently hiring for
              as well.
            </p>
          </div>
        </details>
      </div>
    </div>
  );
};

export default ContactUsAccordionForm;
