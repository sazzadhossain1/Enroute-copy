import React from "react";
import "./ContactUsAccordionForm.css";

const ContactUsAccordionForm = () => {
  return (
    <div className="contactUsAccordionForm-parent-div">
      <div className="accordionForm-children-div">
        <details className="details contactUsAccordionForm-details">
          <summary className="summary summary-color">
            How can I get Outsourcing Services for business?
          </summary>
          <div className="p-div">
            <p>
              Employer branding is the process of promoting a company, or an
              organization, as the employer of choice to a desired target group,
              one which a company needs and wants to recruit and retain. We are
              connected with all the career counseling departments, student
              bodies of the reputed public and private universities. We have lot
              of experiences in campus recruitments, job fair etc.
            </p>
          </div>
        </details>
        <details className="details">
          <summary className="summary">2. HR Process Development</summary>
          <div className="p-div">
            <p>
              We are successfully managing the hr process for many
              organizations. We are experienced in developing hr policy,
              developing organogram for different organizations.
            </p>
          </div>
        </details>
        <details className="details">
          <summary className="summary">3. Focus Group Discussion</summary>
          <div className="p-div">
            <p>
              A focus group discussion (FGD) is a good way to gather together
              people from similar backgrounds or experiences to discuss a
              specific topic of interest of the employees of the organization.
            </p>
          </div>
        </details>
        <details className="details">
          <summary className="summary">4.MTO Hiring Program</summary>
          <div className="p-div">
            <p>
              Enroute is arranging the MTO hiring program since 2012. In the
              program we do:
            </p>
            <ul>
              <li className="li-flex">
                1. Screening and shortlisting of candidates who meet qualifying
                requirements of the respective/client company
              </li>
              <li>
                2. Candidates appear for a competitive written test as per the
                requirements of the respective/client company
              </li>
              <li>
                3. Face to face interview with the respective/client company
              </li>
              <li>4. Medical test by the respective/client company</li>
              <li>
                5. Final shortlisting, selection and offer by the
                respective/client company
              </li>
            </ul>
          </div>
        </details>
        <details className="details">
          <summary className="summary">5. MTO Development Program</summary>
          <div className="p-div">
            <p>
              Enroute thinks Management Trainee Officer Development Program is
              the best way to prepare employees to become managers in the
              future. It equips them with the required skills, judgment, and
              know-how of being an effective and responsible manager. The
              benefits of having management trainees in a company are obvious;
              it provides a good succession planning and improves morale.
            </p>
          </div>
        </details>
        <details className="details">
          <summary className="summary">6. Salary Survey</summary>
          <div className="p-div">
            <p>
              Salary surveys are conducted with numerous employers to determine
              pay levels for specific job categories and are generally conducted
              either by region, sector or job classification for the purposes of
              comparability. Many organizations want to use salary surveys to
              set the compensation levels for their organizations; and for that
              support enroute is there.
            </p>
          </div>
        </details>
      </div>
    </div>
  );
};

export default ContactUsAccordionForm;
