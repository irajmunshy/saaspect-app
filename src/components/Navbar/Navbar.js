import React, { useContext } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faMicrophoneAlt, faSortDown, faCaretRight, faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/first-org.svg';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header><div id="header" data-studio-s="header">
            <div id="c4" data-studio-c="E7hox7nBcQ">
                <div id="topbar">
                    <div className="sites menu right icon3bars signin">

                        <div id="socialnetworks">
                            <a href="/" target="_blank" alt="Twitter @FIRSTdotOrg" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="/" target="_blank" alt="FIRST.Org at LinkedIn" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            <a href="/" target="_blank" alt="FIRST.Org at Facebook" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="" target="_blank" alt="FIRST.Org at Github" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                            <a href="" target="_blank" alt="FIRST.Org at Youtube" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
                            <a href="/" alt="FIRST.Org Podcasts" ><FontAwesomeIcon icon={faMicrophoneAlt} /></a>
                        </div>
                            <Link className="button signin" href="/dashboard/verticalNews">Dashboard</Link>
                        </div>

                        <div className="first-logo">
                            <p>
                                <a href="/">
                                    <img src={logo} alt="FIRST.Org"/>
                                </a>
                            </p>
                        </div>
                        
                        <div className="nav">
                            <a className="subnav"><FontAwesomeIcon icon={faBars} /></a>
                            <ul className="navbar">
                                <li><a href="/">About FIRST <FontAwesomeIcon icon={faSortDown} /></a><a className="subnav"></a>
                                    <ul>
                                        <li><a href="/about/mission">Mission Statement</a></li>
                                        <li><a href="/about/history">History</a></li>
                                        <li><a href="/about/organization">Organization</a>
                                            <a className="subnav"><FontAwesomeIcon icon={faCaretRight} /></a>
                                            <ul>
                                                <li><a href="/about/organization/directors">Board of Directors</a></li>
                                                <li><a href="/about/organization/executive-director">Executive Director</a></li>
                                                <li><a href="/about/organization/secretariat">Secretariat</a></li>
                                                <li><a href="/about/organization/committees">Committees</a></li>
                                                <li><a href="/events/agm">Annual General Meeting</a></li>
                                                <li><a href="/about/organization/reports">Annual Reports and Tax Filings</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/about/policies">FIRST Policies</a><a className="subnav"><FontAwesomeIcon icon={faCaretRight} /></a>
                                            <ul>
                                                <li><a href="/about/policies/anti-corruption">Anti-Corruption Policy</a></li>
                                                <li><a href="/about/policies/antitrust">Antitrust Policy</a></li>
                                                <li><a href="/about/policies/bylaws">Bylaws</a></li>
                                                <li><a href="/about/policies/board-duties">Board duties</a></li>
                                                <li><a href="/about/bugs">Bug Bounty Program</a></li>
                                                <li><a href="/about/policies/code-of-conduct">Code of Conduct</a></li>
                                                <li><a href="/about/policies/conflict-policy">Conflict of Interest Policy</a></li>
                                                <li><a href="/about/policies/doc-rec-retention-policy">Document Record Retention and Destruction Policy</a></li>
                                                <li><a href="/newsroom/policy">FIRST Press Policy</a></li>
                                                <li><a href="/about/policies/gen-event-reg-refund-policy">General Event Registration Refund Policy</a></li>
                                                <li><a href="/about/policies/event-site-selection">Guidelines for Site Selection for all FIRST events</a></li>
                                                <li><a href="/identity">Identity &amp; Logo Usage</a></li><li><a href="/about/policies/media">Media Policy</a></li>
                                                <li><a href="/about/policies/privacy">Privacy Policy</a></li>
                                                <li><a href="/about/policies/standards">Standards Policy</a></li>
                                                <li><a href="/about/policies/translation-policy">Translation Policy</a></li>
                                                <li><a href="/about/policies/travel-policy">Travel Policy</a></li>
                                                <li><a href="/about/policies/uniform-ipr">Uniform IPR Policy</a></li>
                                                <li><a href="/about/policies/whistleblower-policy">Whistleblower Protection Policy</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/about/partners">Partnerships</a><a className="subnav"><FontAwesomeIcon icon={faCaretRight} /></a>
                                            <ul>
                                                <li><a href="/global/partners">Partners</a></li>
                                                <li><a href="/global/friends">Friends of FIRST</a></li>
                                                <li><a href="/global/supporters">FIRST Supporters</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/newsroom">Newsroom</a><a className="subnav"><FontAwesomeIcon icon={faCaretRight} /></a>
                                            <ul>
                                                <li><a href="/newsroom/news">What's New</a></li>
                                                <li><a href="/newsroom/releases">Press Releases</a></li>
                                                <li><a href="/newsroom/news/media">In the News</a></li>
                                                <li><a href="/newsroom/news/podcasts/">Podcasts</a></li>
                                                <li><a href="/newsroom/newsletters">Newsletters</a></li>
                                                <li><a href="/newsroom/policy">FIRST Press Policy</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/about/procurement">Procurement</a></li>
                                        <li><a href="/about/jobs/">Jobs</a></li>
                                        <li><a href="/contact">Contact</a></li>
                                    </ul>
                                </li>
                                <li><a href="/">Membership <FontAwesomeIcon icon={faSortDown} /></a><a className="subnav"></a>
                                    <ul>
                                        <li>
                                            <a href="/membership">Becoming a Member</a>
                                            <a className="subnav"><FontAwesomeIcon icon={faCaretRight} /></a>
                                            <ul>
                                                <li><a href="/membership/benefits">Benefits</a></li>
                                                <li><a href="/membership/process">Membership Process</a><a className="subnav"><FontAwesomeIcon icon={faCaretRight} /></a>
                                                    <ul>
                                                        <li><a href="/membership/Appendix_A">Full Member Form (App A)</a></li>
                                                        <li><a href="/membership/Appendix_B">Liaison Form (App B)</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="/membership/fees">Membership Fees</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/members/teams">FIRST Teams</a></li>
                                        <li><a href="/members/liaisons">FIRST Liaisons</a></li>
                                        <li><a href="/members/map">Members around the world</a></li>
                                        <li><a href="/members/application">Membership Application</a><a className="subnav"><FontAwesomeIcon icon={faCaretRight} /></a>
                                            <ul>
                                                <li><a href="/members/application/teams">Team Membership Application</a></li>
                                                <li><a href="/members/application/liaison">Liaison Membership Application</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="/">Initiatives <FontAwesomeIcon icon={faSortDown} /></a><a className="subnav"></a>
                                    <ul>
                                        <li><a href="/global/sigs">Special Interest Groups (SIGs)</a><a className="subnav"><FontAwesomeIcon icon={faCaretRight} /></a>
                                            <ul>
                                                <li><a href="/global/sigs/academicsec" className="borderb">Academic Security SIG</a></li>
                                                <li><a href="/global/sigs/bigdata">Big Data SIG</a></li>
                                                <li><a href="/cvss">Common Vulnerability Scoring System (CVSS-SIG)</a><a className="subnav"><FontAwesomeIcon icon={faCaretRight} /></a>
                                                    <ul>
                                                        <li><a href="/cvss/calculator/3.1">Calculator</a></li>
                                                        <li><a href="/cvss/specification-document">Specification Document</a></li>
                                                        <li><a href="/cvss/user-guide">User Guide</a></li>
                                                        <li><a href="/cvss/examples">Examples</a></li>
                                                        <li><a href="/cvss/v3-1">CVSS v3.1 Documentation &amp; Resources</a><a className="subnav"><FontAwesomeIcon icon={faCaretRight} /></a>
                                                            <ul>
                                                                <li><a href="/cvss/calculator/3.1">CVSS v3.1 Calculator</a></li>
                                                                <li><a href="/cvss/v3.1/specification-document">CVSS v3.1 Specification Document</a></li>
                                                                <li><a href="/cvss/v3.1/user-guide">CVSS v3.1 User Guide</a></li>
                                                                <li><a href="/cvss/v3.1/examples">CVSS v3.1 Examples</a></li>
                                                                <li><a href="/cvss/v3.1/use-design">CVSS v3.1 Calculator Use &amp; Design</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="/cvss/v3-0">CVSS v3.0 Archive</a><a className="subnav"><FontAwesomeIcon icon={faCaretRight} /></a>
                                                            <ul>
                                                                <li><a href="/cvss/calculator/3.0">CVSS v3.0 Calculator</a></li>
                                                                <li><a href="/cvss/v3.0/specification-document">CVSS v3.0 Specification Document</a></li>
                                                                <li><a href="/cvss/v3.0/user-guide">CVSS v3.0 User Guide</a></li>
                                                                <li><a href="/cvss/v3.0/examples">CVSS v3.0 Examples</a></li>
                                                                <li><a href="/cvss/v3.0/use-design">CVSS v3.0 Calculator Use &amp; Design</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="/cvss/v2">CVSS v2 Archive</a><a className="subnav"><FontAwesomeIcon icon={faCaretRight} /></a>
                                                            <ul>
                                                                <li><a href="/cvss/v2/guide">CVSS v2 Complete Documentation</a></li>
                                                                <li><a href="/cvss/v2/history">CVSS v2 History</a></li>
                                                                <li><a href="/cvss/v2/team">CVSS-SIG team</a></li>
                                                                <li><a href="/cvss/v2/meetings">SIG Meetings</a></li>
                                                                <li><a href="/cvss/v2/faq">Frequently Asked Questions</a></li>
                                                                <li><a href="/cvss/v2/adopters">CVSS Adopters</a></li>
                                                                <li><a href="/cvss/v2/links">CVSS Links</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="/cvss/v1">CVSS v1 Archive</a><a className="subnav"><FontAwesomeIcon icon={faCaretRight} /></a>
                                                            <ul>
                                                                <li><a href="/cvss/v1/intro">Introduction to CVSS</a></li>
                                                                <li><a href="/cvss/v1/faq">Frequently Asked Questions</a></li>
                                                                <li><a href="/cvss/v1/guide">Complete CVSS v1 Guide</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="/cvss/data-representations">JSON &amp; XML Data Representations</a></li>
                                                        <li><a href="/cvss/training">CVSS On-Line Training Course</a></li>
                                                        <li><a href="/cvss/identity">Identity &amp; logo usage</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="/global/sigs/csirt">CSIRT Framework Development SIG</a></li>
                                                <li><a href="/global/sigs/cyberinsurance">Cyber Insurance SIG</a><a className="subnav"><FontAwesomeIcon icon={faCaretRight} /></a>
                                                    <ul>
                                                        <li><a href="/global/sigs/cyberinsurance/events">Cyber Insurance SIG Webinars</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="/global/sigs/cti">Cyber Threat Intelligence SIG</a><a className="subnav"><FontAwesomeIcon icon={faCaretRight} /></a>
                                                    <ul>
                                                        <li><a href="/global/sigs/cti/curriculum/">Curriculum</a><a className="subnav"></a>
                                                            <ul>
                                                                <li><a href="/global/sigs/cti/curriculum/introduction">Introduction</a></li>
                                                                <li><a href="/global/sigs/cti/curriculum/cti-introduction">Introduction to CTI as a General topic</a></li>
                                                                <li><a href="/global/sigs/cti/curriculum/methods-methodology">Methods and Methodology</a></li>
                                                                <li><a href="/global/sigs/cti/curriculum/source-evaluation">Source Evaluation and Information Reliability</a></li>
                                                                <li><a href="/global/sigs/cti/curriculum/threat-modelling">Threat Modelling</a></li>
                                                                <li><a href="/global/sigs/cti/curriculum/training">Training</a></li>
                                                                <li><a href="/global/sigs/cti/curriculum/standards">Standards</a></li>
                                                                <li><a href="/global/sigs/cti/curriculum/glossary">Glossary</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li><a href="/global/sigs/dns">DNS Abuse SIG</a></li>
                                                <li><a href="/global/sigs/ethics">Ethics SIG</a><a className="subnav"><FontAwesomeIcon icon={faCaretRight} /></a>
                                                    <ul>
                                                        <li><a href="/global/sigs/ethics/ethics-first">Ethics for Incident Response Teams</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="/epss/">Exploit Prediction Scoring System (EPSS)</a><a className="subnav"><FontAwesomeIcon icon={faCaretRight} /></a>
                                                    <ul>
                                                        <li><a href="/epss/model">The EPSS Model</a></li>
                                                        <li><a href="/epss/papers">Related Papers</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="/global/sigs/ics">Industrial Control Systems SIG (ICS-SIG)</a></li>
                                                <li><a href="/global/sigs/iep">Information Exchange Policy SIG (IEP-SIG)</a></li>
                                                <li><a href="/global/sigs/information-sharing">Information Sharing SIG</a><a className="subnav"><FontAwesomeIcon icon={faCaretRight} /></a>
                                                    <ul>
                                                        <li><a href="/global/sigs/information-sharing/misp">Malware Information Sharing Platform</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="/global/sigs/malware">Malware Analysis</a><a className="subnav"><FontAwesomeIcon icon={faCaretRight} /></a>
                                                    <ul>
                                                        <li><a href="/global/sigs/malware/resources">Malware Analysis Resources</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="/global/sigs/metrics">Metrics SIG</a><a className="subnav"><FontAwesomeIcon icon={faCaretRight} /></a>
                                                    <ul>
                                                        <li><a href="/global/sigs/metrics/events">Metrics SIG Webinars</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="/global/sigs/passive-dns">Passive DNS Exchange</a></li>
                                                <li><a href="/global/sigs/psirt">PSIRT SIG</a><a className="subnav"><FontAwesomeIcon icon={faCaretRight} /></a>
                                                    <ul>
                                                        <li><a href="/global/sigs/psirt/fimc-wg">Full Incident Management Coordination Working Group</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="/global/sigs/red-team">Red Team SIG</a></li>
                                                <li><a href="/global/sigs/cpg">Retail and Consumer Packaged Goods (CPG) SIG</a></li>
                                                <li><a href="/global/sigs/ctf">Security Lounge SIG</a></li>
                                                <li><a href="/global/sigs/framework">SIGs Framework</a></li>
                                                <li><a href="/global/sigs/tic/">Threat Intel Coalition SIG</a><a className="subnav"><FontAwesomeIcon icon={faCaretRight} /></a>
                                                    <ul>
                                                        <li><a href="/global/sigs/tic/membership-rules">Membership Requirements and Veto Rules</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="/global/sigs/tlp">Traffic Light Protocol (TLP-SIG)</a></li>
                                                <li><a href="/global/sigs/vulnerability-coordination">Vulnerability Coordination</a><a className="subnav"><FontAwesomeIcon icon={faCaretRight} /></a>
                                                    <ul>
                                                        <li><a href="/global/sigs/vulnerability-coordination/multiparty">Multi-Party Vulnerability Coordination and Disclosure</a></li>
                                                        <li><a href="/global/sigs/vulnerability-coordination/multiparty/guidelines">Guidelines and Practices for Multi-Party Vulnerability Coordination and Disclosure</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="/global/sigs/vrdx">Vulnerability Reporting and Data eXchange SIG (VRDX-SIG)</a><a className="subnav"><FontAwesomeIcon icon={faCaretRight} /></a>
                                                    <ul>
                                                        <li><a href="/global/sigs/vrdx/vdb-catalog">Vulnerability Database Catalog</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="/global/sigs/wof">Women of FIRST</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/global/governance">Internet Governance</a></li>
                                        <li><a href="/global/irt-database">IR Database</a></li>
                                        <li><a href="/global/fellowship">Fellowship Program</a><a className="subnav"><FontAwesomeIcon icon={faCaretRight} /></a>
                                            <ul>
                                                <li><a href="https://portal.first.org/fellowship">Application Form</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/hof">IR Hall of Fame</a><a className="subnav"><FontAwesomeIcon icon={faCaretRight} /></a>
                                            <ul>
                                                <li><a href="/hof/inductees">Hall of Fame Inductees</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/volunteers/">Volunteers at FIRST</a><a className="subnav"><FontAwesomeIcon icon={faCaretRight} /></a>
                                            <ul>
                                                <li><a href="/volunteers/list">FIRST Volunteers</a></li>
                                                <li><a href="/volunteers/participation">Volunteer Contribution Record</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#new">Previous Activities</a><a className="subnav"><FontAwesomeIcon icon={faCaretRight} /></a>
                                            <ul>
                                                <li><a href="/global/practices">Best Practices Contest</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="/">Standards &amp; Publications <FontAwesomeIcon icon={faSortDown} /></a><a className="subnav"></a>
                                    <ul>
                                        <li><a href="/standards">Standards</a><a className="subnav"><FontAwesomeIcon icon={faCaretRight} /></a>
                                            <ul>
                                                <li><a href="/cvss">Common Vulnerability Scoring System (CVSS-SIG)</a></li>
                                                <li><a href="/tlp">Traffic Light Protocol (TLP)</a></li>
                                                <li><a href="/standards/frameworks/">Service Frameworks</a><a className="subnav"><FontAwesomeIcon icon={faCaretRight} /></a>
                                                    <ul>
                                                        <li><a href="/standards/frameworks/csirts">CSIRT Services Framework</a></li>
                                                        <li><a href="/standards/frameworks/psirts">PSIRT Services Framework</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="/iep">Information Exchange Policy (IEP)</a><a className="subnav"><FontAwesomeIcon icon={faCaretRight} /></a>
                                                    <ul>
                                                        <li><a href="/iep/iep_framework_2_0">IEP 2.0 Framework</a></li>
                                                        <li><a href="/iep/iep-json-2_0">IEP 2.0 JSON Specification</a></li>
                                                        <li><a href="/iep/iep-polices">Standard IEP Policies</a><a className="subnav"><FontAwesomeIcon icon={faCaretRight} /></a>
                                                            <ul>
                                                                <li><a href="https://www.first.org/iep/2.0/first-tlp-iep.iepj">IEP TLP Policy File</a></li>
                                                                <li><a href="https://www.first.org/iep/2.0/first-unknown-iep.iepj">IEP Unknown Policy File</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="/iep/iep_v1_0">IEP 1.0 Archive</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="/global/sigs/passive-dns">Passive DNS Exchange</a></li>
                                                <li><a href="/epss">Exploit Prediction Scoring System (EPSS)</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/resources/papers">Publications</a></li>
                                        <li><a href="/resources/guides">Best Practices Guide (BPGL)</a></li>
                                        <li><a href="/resources/guides/reference">Security Reference Index</a><a className="subnav"><FontAwesomeIcon icon={faCaretRight} /></a>
                                            <ul>
                                                <li><a href="/resources/guides/submission">Contribute to the Library</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="/">Events <FontAwesomeIcon icon={faSortDown} /></a><a className="subnav"></a>
                                    <ul>
                                        <li><a href="/events/calendar">Events Calendar</a></li>
                                        <li><a href="/events/first">FIRST Events</a></li>
                                        <li><a href="/conference">Annual Conferences</a><a className="subnav"><FontAwesomeIcon icon={faCaretRight} /></a>
                                            <ul>
                                                <li><a href="/conference/monitoring">Network Privacy Statement and Conference Monitoring</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/events/colloquia">Technical Colloquia &amp; Symposia</a></li>
                                        <li><a href="/events/training">Training &amp; Workshops</a></li>
                                        <li><a href="/events/web">Webinars &amp; Virtual Events</a></li>
                                    </ul>
                                </li>
                                <li><a href="/">Education <FontAwesomeIcon icon={faSortDown} /></a><a className="subnav"></a>
                                    <ul>
                                        <li><a href="/education/trainings">Training Courses</a></li>
                                        <li><a href="/education/trainers">For Trainers</a></li>
                                    </ul>
                                </li>
                                <li><a href="/">Blog</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;