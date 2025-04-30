
import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionHeading from "../components/SectionHeading";
import Speaker from "../components/Speaker";
import Sponsor from "../components/Sponsor";
import EventScheduleItem from "../components/EventScheduleItem";
import { Button } from "../components/ui/button";

const Index = () => {
  // Sample data
  const speakers = [
    { id: 1, name: "Alex Johnson", role: "Lead QA Engineer, Google", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
    { id: 2, name: "Michael Brown", role: "Testing Director, Microsoft", image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
    { id: 3, name: "Sarah Wilson", role: "QA Automation Expert, Amazon", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
    { id: 4, name: "Emily Parker", role: "Test Strategy Consultant", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
    { id: 5, name: "David Chen", role: "DevOps Testing Specialist", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
    { id: 6, name: "Jessica Lee", role: "Security Testing Expert", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" }
  ];

  const sponsors = [
    { id: 1, name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png", tier: "platinum" },
    { id: 2, name: "LinkedIn", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png", tier: "platinum" },
    { id: 3, name: "Envato", logo: "https://seeklogo.com/images/E/envato-logo-D81F365B70-seeklogo.com.png", tier: "gold" },
    { id: 4, name: "Spotify", logo: "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png", tier: "gold" },
    { id: 5, name: "Vimeo", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Vimeo_Logo.png/1200px-Vimeo_Logo.png", tier: "silver" },
    { id: 6, name: "Pinterest", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png", tier: "silver" },
    { id: 7, name: "Dribbble", logo: "https://cdn.dribbble.com/users/1041/screenshots/2185509/dribbble-ball-1.png", tier: "silver" }
  ] as const;

  const scheduleItems = [
    {
      time: "09:00 - 10:00",
      title: "Introduction to Modern Testing Practices",
      speaker: "Alex Johnson",
      description: "A comprehensive overview of the latest testing methodologies and practices in the industry.",
      speakerImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      time: "10:15 - 11:15",
      title: "Continuous Testing in DevOps Pipeline",
      speaker: "David Chen",
      description: "Learn how to integrate automated testing seamlessly within your DevOps workflows.",
      speakerImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      time: "11:30 - 12:30",
      title: "AI-Powered Testing Strategies",
      speaker: "Sarah Wilson",
      description: "Exploring how artificial intelligence is transforming the landscape of software testing.",
      speakerImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      time: "14:00 - 15:00",
      title: "Security-First Testing Approach",
      speaker: "Jessica Lee",
      description: "A deep dive into implementing security testing throughout the development lifecycle.",
      speakerImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/banner.png')" }}
      >
        <div className="absolute inset-0 hero-overlay"></div>
        <Header />
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-[#f4a82e] text-4xl md:text-6xl font-bold mb-4 font-montserrat">TEST SOCIETY 2025</h1>
          <p className="text-white text-xl md:text-2xl mb-6">QUALITY ASSURANCE CONFERENCE</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
            <div className="flex items-center text-white">
              <span className="text-amber-DEFAULT mr-2">🗓️</span>
              <span>October 10th 2025</span>
            </div>
            <div className="flex items-center text-white">
              <span className="text-amber-DEFAULT mr-2">👥</span>
              <span>+5 Speakers</span>
            </div>
            <div className="flex items-center text-white">
              <span className="text-amber-DEFAULT mr-2">📍</span>
              <span>Lisbon, Portugal</span>
            </div>
          </div>
          <Button 
            className="bg-amber-DEFAULT hover:bg-amber-dark text-black text-lg px-8 py-6" 
            size="lg"
            asChild
          >
            <a href="#register">GRAB YOUR SEAT NOW</a>
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="orange-bg py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="stat-counter">162</div>
              <p className="text-black opacity-80">ATTENDEES</p>
            </div>
            <div>
              <div className="stat-counter">14</div>
              <p className="text-black opacity-80">TALKS</p>
            </div>
            <div>
              <div className="stat-counter">7</div>
              <p className="text-black opacity-80">WORKSHOPS</p>
            </div>
            <div>
              <div className="stat-counter">49</div>
              <p className="text-black opacity-80">HOURS</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="black-bg section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <SectionHeading
                title="Welcome to the Biggest Quality Assurance Conference"
                align="left"
                textColor="text-amber-DEFAULT"
              />
              <p className="text-white mb-6">
                Test Society 2025 brings together the best minds in software testing and quality assurance. Join us for a transformative experience with leading experts, hands-on workshops, and networking opportunities that will elevate your testing skills to the next level.
              </p>
              <p className="text-white mb-6">
                With a focus on practical applications, innovative methodologies, and future trends, this conference is designed for testers, QA managers, developers, and anyone passionate about software quality. Whether you're just starting your QA journey or are a seasoned professional, Test Society 2025 offers valuable insights for all skill levels.
              </p>
              <p className="text-white">
                Don't miss this opportunity to connect with peers, learn from industry leaders, and stay ahead in the rapidly evolving world of software testing.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1573164574511-73c773193279?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                alt="Conference presentation" 
                className="rounded-lg object-cover h-48 w-full" 
              />
              <img 
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                alt="Workshop session" 
                className="rounded-lg object-cover h-48 w-full" 
              />
              <img 
                src="https://images.unsplash.com/photo-1582192730841-2a682d7375f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                alt="Networking event" 
                className="rounded-lg object-cover h-48 w-full" 
              />
              <img 
                src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                alt="Panel discussion" 
                className="rounded-lg object-cover h-48 w-full" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="teal-gradient section-padding">
        <div className="container mx-auto">
          <SectionHeading 
            title="The Speakers" 
            subtitle="Learn from industry experts and thought leaders"
            textColor="text-white"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker) => (
              <Speaker 
                key={speaker.id}
                name={speaker.name}
                role={speaker.role}
                image={speaker.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Attend Section */}
      <section className="black-bg section-padding">
        <div className="container mx-auto">
          <SectionHeading
            title="Why You Should Join Event"
            textColor="text-amber-DEFAULT"
          />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black bg-opacity-50 p-6 border-l-4 border-amber-DEFAULT">
              <h3 className="text-amber-DEFAULT text-xl font-semibold mb-4">World Class Speakers</h3>
              <p className="text-white">Learn from the best in the industry with our lineup of exceptional speakers who bring years of expertise and insights to share.</p>
            </div>
            <div className="bg-black bg-opacity-50 p-6 border-l-4 border-amber-DEFAULT">
              <h3 className="text-amber-DEFAULT text-xl font-semibold mb-4">Hands-on Workshops</h3>
              <p className="text-white">Gain practical skills through our interactive workshops designed to enhance your testing abilities and solve real-world challenges.</p>
            </div>
            <div className="bg-black bg-opacity-50 p-6 border-l-4 border-amber-DEFAULT">
              <h3 className="text-amber-DEFAULT text-xl font-semibold mb-4">Networking Opportunities</h3>
              <p className="text-white">Connect with fellow professionals, industry leaders, and potential collaborators in a setting designed for meaningful interactions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="orange-bg section-padding">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Get your seat before they sell out!</h2>
          <Button 
            className="bg-black hover:bg-gray-800 text-white text-lg px-8 py-6"
            size="lg"
            asChild
          >
            <a href="#register">RESERVE NOW</a>
          </Button>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="black-bg section-padding">
        <div className="container mx-auto">
          <SectionHeading
            title="Event Schedule"
            subtitle="Plan your day at Test Society 2025"
            textColor="text-amber-DEFAULT"
          />

          <div className="max-w-3xl mx-auto">
            {scheduleItems.map((item, index) => (
              <EventScheduleItem
                key={index}
                time={item.time}
                title={item.title}
                speaker={item.speaker}
                description={item.description}
                speakerImage={item.speakerImage}
              />
            ))}
          </div>

          <div className="text-center mt-16">
            <Button 
              className="bg-amber-DEFAULT hover:bg-amber-dark text-black"
              asChild
            >
              <a href="#" download>DOWNLOAD FULL SCHEDULE</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="black-bg section-padding">
        <div className="container mx-auto">
          <SectionHeading
            title="Official Sponsors"
            textColor="text-amber-DEFAULT"
          />
          
          <div>
            <h3 className="text-center text-white text-xl mb-8">Platinum Sponsors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {sponsors
                .filter(sponsor => sponsor.tier === 'platinum')
                .map(sponsor => (
                  <Sponsor 
                    key={sponsor.id}
                    name={sponsor.name}
                    logo={sponsor.logo}
                    tier={sponsor.tier}
                  />
                ))}
            </div>
            
            <h3 className="text-center text-white text-xl mb-8">Gold Sponsors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {sponsors
                .filter(sponsor => sponsor.tier === 'gold')
                .map(sponsor => (
                  <Sponsor 
                    key={sponsor.id}
                    name={sponsor.name}
                    logo={sponsor.logo}
                    tier={sponsor.tier}
                  />
                ))}
            </div>
            
            <h3 className="text-center text-white text-xl mb-8">Silver Sponsors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {sponsors
                .filter(sponsor => sponsor.tier === 'silver')
                .map(sponsor => (
                  <Sponsor 
                    key={sponsor.id}
                    name={sponsor.name}
                    logo={sponsor.logo}
                    tier={sponsor.tier}
                  />
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="teal-gradient section-padding text-center">
        <div className="container mx-auto">
          <SectionHeading
            title="Exceeding Expectations!"
            textColor="text-white"
          />
          
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-white text-lg md:text-xl italic mb-8">
              "The Test Society conference was a game-changer for our QA team. The insights we gained from the speakers and workshops have transformed our approach to testing and significantly improved our product quality."
            </blockquote>
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                  alt="John Smith" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">John Smith</p>
                <p className="text-amber-DEFAULT">QA Director, TechCorp Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="orange-bg section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg h-64">
                <img 
                  src={image} 
                  alt={`Conference moment ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="black-bg section-padding">
        <div className="container mx-auto text-center">
          <SectionHeading
            title="Register Now"
            subtitle="Secure your spot at Test Society 2025"
            textColor="text-amber-DEFAULT"
          />
          
          <div className="max-w-lg mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-left">
                  <label htmlFor="firstName" className="block text-amber-DEFAULT mb-2">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full bg-black border border-amber-DEFAULT/30 text-white p-3 rounded-md focus:outline-none focus:border-amber-DEFAULT"
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="text-left">
                  <label htmlFor="lastName" className="block text-amber-DEFAULT mb-2">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full bg-black border border-amber-DEFAULT/30 text-white p-3 rounded-md focus:outline-none focus:border-amber-DEFAULT"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              <div className="text-left">
                <label htmlFor="email" className="block text-amber-DEFAULT mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-black border border-amber-DEFAULT/30 text-white p-3 rounded-md focus:outline-none focus:border-amber-DEFAULT"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="text-left">
                <label htmlFor="company" className="block text-amber-DEFAULT mb-2">Company</label>
                <input 
                  type="text" 
                  id="company" 
                  className="w-full bg-black border border-amber-DEFAULT/30 text-white p-3 rounded-md focus:outline-none focus:border-amber-DEFAULT"
                  placeholder="Enter your company name"
                />
              </div>
              <Button 
                type="submit"
                className="bg-amber-DEFAULT hover:bg-amber-dark text-black w-full text-lg py-6"
                size="lg"
              >
                REGISTER NOW
              </Button>
            </form>
          </div>

          <div className="mt-12 text-white opacity-80">
            <p className="mb-2">Early Bird Ticket: $299 (Until June 1st)</p>
            <p>Regular Price: $499</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
