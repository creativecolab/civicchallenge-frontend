/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from 'components/Navbar/Navbar';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import globalStyles from 'main.scss';

import DBHeader from './components/DBHeader/DBHeader';
import DBOverview from './components/DBOverview/DBOverview';
/* import Resources from './components/Resources/Resources'; */

import styles from './DesignBrief.scss';

/* images */
import fatal15 from './imgs/walking/walking-f15.jpg';
import bikerImpact from './imgs/walking/walking-biker-impact.jpg';
import pedestVisible from './imgs/walking/walking-visibility.jpg';

import visualImpair from './imgs/accessibility/accessibility-braille.jpg';
import stairs from './imgs/accessibility/accessibility-stairs.jpg';
import lyft from './imgs/accessibility/accessibility-lyft.jpg';
import olderActive from './imgs/accessibility/accessibility-active-2.jpg';

import parkingDynamic from './imgs/parking/Parking-dynamic.jpg';
import communicate from './imgs/parking/transit-1.jpg';
import enjoy from './imgs/parking/commuter-experience.jpg';

import productive from './imgs/av/AV-productive.jpg';
import whatsNext from './imgs/av/AV-truck.jpeg';
import stopSigns from './imgs/av/AV-stopsigns.jpg';

/**
 * Constants
 */

const CHALLENGE_INFO = {
  walking: {
    challengeTitle: 'Walkable and Bikeable Communities',
    question: 'How might we improve safety on the street?',
    intro: 'What can be done to improve pedestrian and bicycle safety in San Diego? “There is a latent demand in the public to walk and bike more, but many people, out of a lack of safe routes, choose not to,” said Kathleen Ferrier, Circulate San Diego’s Director of Advocacy. As the city of San Diego grows in population, more residents are choosing to use walking and biking to avoid traffic congestion and parking. However, since walking and biking are not the norm they can be dangerous in a city built for cars. In response, city leaders have adopted the “Vision Zero” program. Its goal is to eliminate all traffic deaths in the city by 2025, through enforcement, education and street engineering. But what does that mean in practice? How might we realistically redesign our city so that it is more safe for bicycles and pedestrians?',
    overview: [
      {
        title: 'The Fatal 15: What makes these intersections dangerous?',
        text: 'The Fatal 15 is the name given to 15 intersections in the San Diego area that have the highest number of pedestrian deaths and injuries since 2001. Is it possible that these intersections, like Mission Blvd. and Garnet Ave., have something in common that is causing this lack of safety? Circulate San Diego, a local non-profit devoted to promoting safe neighborhoods, streets and intersections compiled the list and estimates the cost to address these dangers at approximately $200,000. Addressing these dangerous spots is important, as is understanding how a spot becomes dangerous over time. What are the early warning signs that an intersection might be deadly, before someone is actually killed in a traffic accident? The Fatal 15 aren’t the only intersections in San Diego though, there are many intersections that are safe and provide a great experience for bikers riding through. What is the difference between these safe intersections and the dangerous ones? What kinds of intersections provide more safety for pedestrians and bikers (e.g. roundabouts and t-junctions)? It’s also imperative that we educate the public about these intersections, and pedestrian safety in general. Education is an effective tool that can be used to give pedestrians alternate routes or even alternate forms of transportation. However, providing education requires some amount of time (rather asking a person to read a pamphlet or listen to a public service announcement), and may not be applied at the appropriate time to encourage someone to alter their behaviors. How might we share information about Circulate San Diego’s research on the Fatal 15 with pedestrians, bikers and drivers as they cruise through these spaces?',
        link: '',
        linkText: 'Discuss this in Slack (coming soon)',
        figureA: fatal15,
        figureALink: 'busy intersection with bikes and cars',
        figureB: '',
        figureBLink: '',
        figureC: '',
        figureCLink: '',
      },
      {
        title: 'The Biker Impact: How could “bike-friendly” benefit business and community?',
        text: 'Bike lanes are an essential element of safe roadways, but safety isn’t the only consideration, though they also take up space that could be used for parking, and can reduce access to certain businesses. Some of business owners contend that by taking away parking to make room for bike paths, there is a significant loss of profit because their customers don’t come by bike. Two camps have formed, one that prioritizes the safety of bicyclists on the busy roads in the city, and another that instead prioritizes the economy by encouraging business and having customers park right in front of the businesses. What might we do to make streets more “bike-friendly” while ensuring that the local businesses in our city thrive?',
        link: '',
        linkText: 'Discuss this in Slack (coming soon)',
        figureA: bikerImpact,
        figureALink: 'man sittin on bike rack with a bike',
        figureB: '',
        figureBLink: '',
        figureC: '',
        figureCLink: '',
      },
      {
        title: 'Raising Awareness: Is biker and walker visibility on the road really the problem?',
        text: 'Everyday car-bike collisions result in injury, if not the death of a cyclist. Though is making the cyclist more visible the core design challenge? On the one hand, there are 217,000 trees adjacent to streets in the city of San Diego. This foliage may be concealing cyclists and pedestrians from the view of drivers. On the other hand, 45% of bike accidents that involve a car happen at intersections, moments when a driver needs to make a quick and complex series of decisions. It may be that drivers need different forms of assistance to account for pedestrians and bikers at various points along their drive home.',
        link: '',
        linkText: 'Discuss this in Slack (coming soon)',
        figureA: pedestVisible,
        figureALink: 'busy road with bikes, pedestrians, cars',
        figureB: '',
        figureBLink: '',
        figureC: '',
        figureCLink: '',
      },
    ],
  },
  improvingaccessibility: {
    challengeTitle: 'Improving Accesibility',
    question: ' How do we help everyone reach their destination?',
    intro: 'Many people face challenges getting around. Mobility can be difficult for any combination of physical, sensory, mental, or cognitive impairments. Approximately 17% of San Diegans have some form of impairment that affects their mobility. Individuals older than 60 represent the fastest growing segment of the population, with the number of senior residents expected to double by 2030. The sprawling nature of our region also makes it harder for people to reach their destination compared to other cities.',
    overview: [
      {
        title: 'Visual impairments: How do you move around if you cannot see or hear?',
        text: 'Most of us take our eyes and ears for granted. For those with sensory disabilities, navigating the city can be a challenge. For people who are blind and others with poor vision, it can be difficult to walk through urban environments and to take public transit.  San Diego’s Metropolitan Transit System has outfitted all stations with raised letters and braille plates identifying the route and direction (North/South/East/West), but challenges remain. For example, even the step onto a train can be intimidating. How do people with sensory impairments overcome these everyday barriers? How can the signage at our metro stations be improved? For individuals who are deaf or hearing impaired, the challenge may be a lack of auditory cues. For example, a deaf individual might not hear a big truck bearing down or loud sirens from an ambulance. However, people with partial hearing may have difficulty crowded or loud environments, where the background noise can drown out important messages. How might we improve safety when auditory clues are not available?',
        link: '',
        linkText: 'Discuss this in Slack (coming soon)',
        figureA: visualImpair,
        figureALink: 'people wearing google glasses in an auditorium',
        figureB: '',
        figureBLink: '',
        figureC: '',
        figureCLink: '',
      },
      {
        title: 'Wheelchair obstacles: How do you navigate stairs in a wheelchair?',
        text: 'A person with a mobility impairment (e.g., requiring crutches, a cane, or a wheelchair) often has difficulty with stairways and high curbs, and avoiding these physical barriers may take them in circuitous routes, which might even be more treacherous in rainy and winter conditions. The lack of convenient, accessible, and affordable forms of transportation for disabled people is a major problem in San Diego. How might we improve access to our city for people with mobility impairments? Though before reinventing the wheel for this Mobility Challenge, it is important to note that there are several existing services in San Diego available to people with mobility impairments. These services include the San Diego Volunteer Drivers Coalition and the ADA Paratransit shuttles. Ride sharing applications, like Lyft’s Accessible Vehicle Dispatch service, have made it relatively easy to plan trips across town. How might we improve this existing infrastructure to better serve people with physical impairments?',
        link: '',
        linkText: 'Discuss this in Slack (coming soon)',
        figureA: stairs,
        figureALink: 'wheelchair facing stairs',
        figureB: '',
        figureBLink: '',
        figureC: '',
        figureCLink: '',
      },
      {
        title: 'Aging and technology: How might we help seniors order a Lyft or Uber?',
        text: 'Mobile phone based applications have made it easy to reserve a ride, order a meal, and find the hottest events happening right now. But, seniors are often the last demographic to adopt these new technologies. Though there has been progress, these services simply have not been adapted to cater to older populations.  Uber and Lyft are transportation/rideshare companies that have been growing at an incredible rate in recent years. They take advantage of the convenience of technology and make travel much easier to arrange, but if our seniors don’t think it’s approachable, their mobility options will be severely limited. How might we adapt ride-sharing and other applications—or ordering meals or finding events and volunteer opportunities—to make them more approachable and enjoyable for seniors?',
        link: '',
        linkText: 'Discuss this in Slack (coming soon)',
        figureA: lyft,
        figureALink: 'rideshare car on sidewalk',
        figureB: '',
        figureBLink: '',
        figureC: '',
        figureCLink: '',
      },
      {
        title: 'Active lifestyles: How could we help older residents feel fit and energized?',
        text: 'Seniors who are physically active and able to get around independently have greater flexibility, muscle strength, balance, and bone density—all of which help them recover more rapidly from illness and injuries, and live longer, healthier lives. What transportation services or initiatives might we imagine for our cities senior residents? Staying active is an important part of staying healthy, but it can be difficult even for those of us who don’t contend with some of the consequences of old age. Without access to reliable transportation, the elderly may have reduced options for mobility and as a result be less inclined to stay active and social. In order to encourage active and social behaviour from our elderly population, it’s important to identify some of the challenges that are posed to them, such as disabilities, or even lack of understanding of the available technology. What kind of challenges might arise while working to provide accommodations to an aging population?',
        link: '',
        linkText: 'Discuss this in Slack (coming soon)',
        figureA: olderActive,
        figureALink: 'people jumping on a beach',
        figureB: '',
        figureBLink: '',
        figureC: '',
        figureCLink: '',
      },
    ],
  },
  traffic: {
    challengeTitle: 'Enhancing the Commuter Experience',
    question: 'What would make your commute relaxing?',
    intro: 'San Diego has one of the shortest commutes in the U.S. (at an average of 23 minutes), but an accident or highway repair can add stressful-frustrating hours. There must be some way to reduce the effects of this stress (e.g. higher blood pressure, higher weight, and lower fitness levels). Although leaving traffic isn’t any relaxing. Parking can also be a problem, making the entire commute an ordeal. Often, drivers don’t even know where to park because of the small print and confusing rules on parking signage. Many avoid driving themselves altogether and instead commute by public transit. However, the public transit system could use several improvements. Feedback and communication with riders is an interesting one:  Information transfer and communication is an important part of the commuter experience, without feedback and communication it can be difficult to improve the experience, a problem that is faced by the public transit system.',
    overview: [
      {
        title: 'Dynamic Parking: How might we route cars to the just-open spaces?',
        text: 'In a large city like San Diego, parking is a widespread problem. As the population increases each year more cars join the road and better systems are needed to manage and plan for new parking infrastructure. How might we help drivers and planners navigate the challenge of parking in San Diego? The city of San Diego is broken down into six community parking districts: Downtown, La Jolla, Midtown, Old Town, Pacific Beach, and Uptown, and further into residential and business parking. The challenge at hand is to figure out the most efficient parking plan possible for the areas where parking is deemed “bad”. Drivers need information about where to find a spot and how much time they have left on the meter. The city currently operates with a basic website that only offers static parking information, while a real-time solution might be considered more ideal. “How do we get information to the public?” is a question continually asked by city officials. “It’s not a shortage of parking. It’s a matter of having the parking where people want to go, and having the parking work correctly.” says Gary Smith from San Diego’s Downtown Parking Management Group.',
        link: '',
        linkText: 'Discuss this in Slack (coming soon)',
        figureA: parkingDynamic,
        figureALink: 'concrete parking garage',
        figureB: '',
        figureBLink: '',
        figureC: '',
        figureCLink: '',
      },
      {
        title: 'Transit: How could we communicate with commuters?',
        text: 'Users of public transit in San Diego have recently reported increased dissatisfaction with transit costs, public transit availability, and cleanliness at public transit areas. The Metropolitan Transit System (MTS) and North County Transit District (NCTD) need better ways of hearing and responding to public transit riders. San Diego’s public transit infrastructure is extensive. MTS is currently working on the Mid-Coast Trolley Project, which will increase accessibility to public transit in San Diego. Improvements designed with public transportation users in mind can motivate them to continue using public transportation, which ultimately benefits San Diego residents and businesses financially, and it helps San Diego to be more environmentally-friendly. What are the best ways to connect with this population of riders, and actively get their input about specific spots that need improvement? Even the design of that “feedback” may need improvement.',
        link: '',
        linkText: 'Discuss this in Slack (coming soon)',
        figureA: communicate,
        figureALink: 'MTS train',
        figureB: '',
        figureBLink: '',
        figureC: '',
        figureCLink: '',
      },
      {
        title: 'Traffic: Could an hour in commute be more enjoyable?',
        text: 'Residents of San Diego deal with congested freeways every day---northbound in the morning, and even slower southbound in the evening. Why is it this way? Could we make changes to the infrastructure, traffic behavior, or policy-wise to reduce our dependence on cars? Our dependence on cars is not only bad for traffic and congestion, but also our health and the environment. By definition, traffic congestion is a function of too many cars trying to occupy the same restricted space at the same time. The stop and start to traffic can be maddening. The frustration to being in traffic can easily morph into stress, which has recently come to be referred to as the "car effect." The challenge remains on whether to invest in improving driving experience, such as better roads and education in merging techniques etc., or whether to invest in promoting other means of transportation. It is clear though, that something must be done to mitigate some of these effects.',
        link: '',
        linkText: 'Discuss this in Slack (coming soon)',
        figureA: enjoy,
        figureALink: 'bumper to bumper traffic',
        figureB: '',
        figureBLink: '',
        figureC: '',
        figureCLink: '',
      },
    ],
  },
  autonomousvehicles: {
    challengeTitle: 'Preparing for Autonomous Vehicles',
    question: 'How do we take our hands off the wheel?',
    intro: 'An autonomous vehicle (self-driving car) is a vehicle that can drive itself without human guidance. These vehicles are arriving faster than most people have anticipated. How might we prepare for this major advance in transportation? An important concern about adding Autonomous Vehicles (AVs) is the effect of “driverless” on the industries that hire drivers, as well as the drivers themselves. There are also policy questions about Autonomous Vehicles such as, determining fault in the case of an accident (e.g., passenger, manufacturer, designer). However, a related concern is how other drivers will engage with AVs—there is some concern that other drivers might cut off, chase down, or otherwise aggressively engage with AVs. Lastly, it may be easy to hack an AV, as they are designed to continuously receive information from other cars and sensors on the road through a “WiFi like” transmission system. Preparing for AVs may also mean rethinking the design of our existing roadways and signage. If AVs can monitor the speed and distance of other AVs, that means that cars can potentially travel at far faster speeds and in very close proximity. Will stop lights be necessary in this not-so-distant future?',
    overview: [
      {
        title: 'User experience inside autonomous cars: Can we be more productive?',
        text: 'The experience of riding in an autonomous vehicle (AV) may be very different than driving. Driving may no longer be about keeping your eyes on the road and hands at 10 and 2. Moving around, dancing, even singing karaoke are all possibilities when driverless cars are involved. Several automotive companies have made a pledge to have AVs on the road before 2020. As one example of how AVs might offer a radically new experience, think about what work might be like while riding in an AV. Many cars are already WiFi-enabled and wired for conference calls. Without needing to focus on the road, a rider could focus on that pressing report and why keep the meeting in the office conference room, if we could set a course and sit around a table while cruising down La Jolla’s Scenic Drive?',
        link: '',
        linkText: 'Discuss this in Slack (coming soon)',
        figureA: productive,
        figureALink: 'person texting in car',
        figureB: '',
        figureBLink: '',
        figureC: '',
        figureCLink: '',
      },
      {
        title: 'Future jobs for professional drivers: What gig can they pick up next?',
        text: 'San Diego is already beginning to test out autonomous vehicles under the direction of SANDAG. As autonomous vehicles begin to rise in popularity and use, professions and labor markets that depend on cars will transform. For example, Uber, Lyft, and other ride sharing companies may switch over completely and change their platforms to reflect the changes in the use of the roads. Thinking about the thousands of people who work in this gig market, what will they do next? In the past, such technology shifts have been accompanied by job retraining and transition periods that help the labor force adapt—though it is unclear what such professional development might look like as these gig economies evolve. As might other industries related to human driven vehicles, e.g., vehicle insurance, container shipping, and the traffic engineering profession. What kinds of changes need to be made to accommodate the job training or potential spike in unemployment if industries rapidly adopt AVs?',
        link: '',
        linkText: 'Discuss this in Slack (coming soon)',
        figureA: whatsNext,
        figureALink: 'autonomous car',
        figureB: '',
        figureBLink: '',
        figureC: '',
        figureCLink: '',
      },
      {
        title: 'Preparing the city: Are stop signs a relic of the past?',
        text: 'San Diego is one of the 10 cities that has been selected by the Department of Transportation to test introducing autonomous vehicles (AVs) to city streets. Though it’s important to note that AVs not only ride on the streets, they might also talk with the street, the light signals and all other sensors even miles down the road. AVs use onboard sensors to detect potential immediate hazards, but also integrate with other cars and sensors in a communication network that connects them to potential dangers miles ahead.For passengers, these safety precautions add to a relaxing experience of being chauffeured, but for walkers, bikers and others’ on the road, negotiating traffic with an AV may be a stressful experience. How might an AV signal to a walker or biker that they have been “seen” and accounted for in the navigation routing system, and that it’s actually safe to walk?other concern is that computing systems can be hacked. To communicate with other cars and sensors along the drive, AVs access part of the radio frequency spectrum set aside explicitly for cars, and called “Dedicated Short-Range Communication.” AVs can use this frequency to communicate with other sensors within a 1,000 foot range. However, because AVs are open to receive signals it leaves them vulnerable to hacking. Hacking a car is somewhat different than breaking in and stealing the vehicle—hacked cars might be rerouted, used to reroute other vehicles, or hacking might simply be to delete the car’s log files. All frightening possibilities that need design solutions.',
        link: '',
        linkText: 'Discuss this in Slack (coming soon)',
        figureA: stopSigns,
        figureALink: 'hand on wheel of car',
        figureB: '',
        figureBLink: '',
        figureC: '',
        figureCLink: '',
      },
    ],
  },
  error: {
    challengeTitle: 'Error',
    question: 'That is not a valid challenge',
    intro: '',
    overview: [],
  },
};


/**
 * DesignBrief
 */


const propTypes = {
  params: PropTypes.object.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

class DesignBrief extends React.PureComponent {
  static CURRENTSECTION_HEADER = 'header';
  static CURRENTSECTION_OVERVIEW_BASE = 'overview';
  static CURRENTSECTION_RESOURCES = 'resources';

  static SCROLL_PX_PER_MS = 1000;

  constructor(props) {
    super(props);

    this.state = {
      currentSection: DesignBrief.CURRENTSECTION_HEADER,
    };
  }

  componentDidMount() {
    this._onWindowScroll();
    window.addEventListener('scroll', this._onWindowScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._onWindowScroll);
  }

  _onWindowScroll = () => {
    const { currentSection } = this.state;

    let newCurrentSection = DesignBrief.CURRENTSECTION_HEADER;

    for (let i = this.overviews.length - 1; i >= 0; i -= 1) {
      if (this.overviews[i].getBoundingClientRect().top <= 10) {
        newCurrentSection = `${DesignBrief.CURRENTSECTION_OVERVIEW_BASE}${i}`;
        break;
      }
    }

    if (newCurrentSection !== currentSection) {
      this.setState({
        currentSection: newCurrentSection,
      });
    }
  }

  render() {
    const { currentSection } = this.state;

    let pageInfo = CHALLENGE_INFO[this.props.params.id];

    if (!pageInfo) {
      pageInfo = CHALLENGE_INFO.error;
    }

    const { backgroundImg, challengeTitle, intro, question, overview } = pageInfo;

    return (
      <div className={styles.DesignBrief}>
        <Helmet
          title={challengeTitle}
        />
        <Navbar />
        <Header
          backgroundImg={backgroundImg}
          headerText={question}
          subheaderText={challengeTitle}
          showButton={false}
        />
        <section className={styles.contentContainer}>
          <div className={globalStyles.contentWrapper}>
            <div className={styles.menu}>
              <ul className={styles.sidebar}>
                <a href="#introduction">
                  <li className={currentSection === DesignBrief.CURRENTSECTION_HEADER ? styles.current : ''}><p>Introduction</p></li>
                </a>
                {overview.map(({ title }, i) => (
                  <a href={`#${title.replace(/( |\W)/g, '').toLowerCase()}`}>
                    <li className={currentSection === `${DesignBrief.CURRENTSECTION_OVERVIEW_BASE}${i}` ? styles.current : ''}><p>{title}</p></li>
                  </a>
                ))}
              </ul>
            </div>

            <div id={'introduction'} ref={(el) => { this.header = el; }}>
              <DBHeader
                intro={intro}
              />
            </div>

            {overview.map(({ title, text, link, linkText, figureA, figureALink }, i) => (
              <div id={title.replace(/( |\W)/g, '').toLowerCase()} className={styles.contentWrapper} ref={(el) => { this.overviews = this.overviews || []; this.overviews[i] = el; }}>
                <DBOverview
                  title={title}
                  text={text}
                  figureA={figureA}
                  figureALink={figureALink}
                  /* link={link}
                  linkText={linkText} */
                />
              </div>
            ))}

            {/* <div id={'learningresources'} ref={(el) => { this.resources = el; }}>
              <Resources
                title={RESOURCES.challengeName}
                external={RESOURCES.external}
                news={RESOURCES.news}
              />
            </div> */}
          </div>
        </section>
        <Footer />

      </div>
    );
  }
}

DesignBrief.propTypes = propTypes;
DesignBrief.contextTypes = contextTypes;
DesignBrief.defaultProps = defaultProps;

export default DesignBrief;
