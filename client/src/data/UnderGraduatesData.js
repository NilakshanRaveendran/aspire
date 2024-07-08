import A1 from "../assets/images/A1.png"
import A2 from "../assets/images/A2.png"
import A3 from "../assets/images/A3.png"
import A4 from "../assets/images/A4.png"
import O1 from "../assets/images/O1.png"
import O2 from "../assets/images/O2.png"
import O3 from "../assets/images/O3.png"

const universities = [
    {
      name: 'University of Colombo',
      courses: [
        {
          name: 'Computer Science',
          skills: [
            { image: A1, name: 'Programming Languages', description: 'Master coding languages such as Java, Python, and C++, which are essential for developing software applications.' },
            { image: A2, name: 'Software Development Life Cycle (SDLC)', description: 'Understand the phases of software development from planning and design to implementation and maintenance.' },
            { image: A3, name: 'Algorithms and Data Structures', description: 'Understand the phases of software development from planning and design to implementation and maintenance.' },
            { image: A4, name: 'Database Management', description: 'Understand the phases of software development from planning and design to implementation and maintenance.' }
          ]
        },
        {
          name: 'Business Administration',
          skills: [
            { name: 'Management', description: 'The practice of coordinating and overseeing business operations.' },
            { name: 'Finance', description: 'The management of money, investments, and other financial instruments.' }
          ]
        }
      ]
    },
    {
      name: 'University of Peradeniya',
      courses: [
        {
          name: 'Electrical Engineering',
          skills: [
            { name: 'Electronics', description: 'Design and development of electronic circuits and devices.' },
            { name: 'Power Systems', description: 'Study and design of electrical power systems.' }
          ]
        },
        {
          name: 'Medicine',
          skills: [
            { name: 'Anatomy', description: 'Study of the structure of the body and its parts.' },
            { name: 'Internal Medicine', description: 'Diagnosis and treatment of diseases in adults.' }
          ]
        }
      ]
    },
    {
      name: 'University of Moratuwa',
      courses: [
        {
          name: 'Civil Engineering',
          skills: [
            { name: 'Structural Analysis', description: 'Analysis and design of structures to withstand loads.' },
            { name: 'Construction Management', description: 'Management of construction projects, including planning and coordination.' }
          ]
        },
        {
          name: 'Information Technology',
          skills: [
            { name: 'Web Development', description: 'Development of web applications and websites.' },
            { name: 'Database Management', description: 'Management and organization of databases.' }
          ]
        }
      ]
    },
    {
      name: 'University of Kelaniya',
      courses: [
        {
          name: 'Biological Sciences',
          skills: [
            { name: 'Biology', description: 'Study of living organisms and their interactions with each other and their environments.' },
            { name: 'Genetics', description: 'Study of genes, genetic variation, and heredity in living organisms.' }
          ]
        },
        {
          name: 'Languages',
          skills: [
            { name: 'Translation', description: 'Conversion of written text from one language into another.' },
            { name: 'Linguistics', description: 'Study of language structure, variation, and meaning.' }
          ]
        }
      ]
    },
    {
      name: 'University of Jaffna',
      courses: [
        {
          name: 'Agriculture',
          skills: [
            { name: 'Crop Science', description: 'Study of plants cultivated for food, fiber, and fuel.' },
            { name: 'Agribusiness', description: 'Management of agricultural enterprises, including farming and related businesses.' }
          ]
        },
        {
          name: 'Law',
          skills: [
            { name: 'Legal Studies', description: 'Study of legal principles and systems.' },
            { name: 'International Law', description: 'Laws governing relationships between countries.' }
          ]
        }
      ]
    },
    {
      name: 'Eastern University, Sri Lanka',
      courses: [
        {
          name: 'Engineering Technology',
          skills: [
            { name: 'Mechanical Engineering', description: 'Design and manufacture of mechanical systems and devices.' },
            { name: 'Automotive Technology', description: 'Study and design of automotive systems and technologies.' }
          ]
        },
        {
          name: 'Commerce',
          skills: [
            { name: 'Accounting', description: 'Recording, analyzing, and reporting financial transactions.' },
            { name: 'Business Economics', description: 'Application of economic theory and methods to business decision-making.' }
          ]
        }
      ]
    },
    {
      name: 'Sabaragamuwa University of Sri Lanka',
      courses: [
        {
          name: 'Environmental Sciences',
          skills: [
            { name: 'Ecology', description: 'Study of interactions among organisms and their environment.' },
            { name: 'Environmental Management', description: 'Management of natural resources and environmental policies.' }
          ]
        },
        {
          name: 'Fine Arts',
          skills: [
            { name: 'Painting', description: 'Creation of visual art using various mediums and techniques.' },
            { name: 'Sculpture', description: 'Creation of three-dimensional artworks.' }
          ]
        }
      ]
    },
    {
      name: 'Rajarata University of Sri Lanka',
      courses: [
        {
          name: 'Management Studies',
          skills: [
            { name: 'Strategic Management', description: 'Formulation and implementation of organizational goals and objectives.' },
            { name: 'Leadership', description: 'Ability to motivate and guide individuals and teams towards achieving goals.' }
          ]
        },
        {
          name: 'Physical Sciences',
          skills: [
            { name: 'Physics', description: 'Study of matter, energy, and the fundamental forces of nature.' },
            { name: 'Chemistry', description: 'Study of the properties, composition, and reactions of substances.' }
          ]
        }
      ]
    },
    {
      name: 'South Eastern University of Sri Lanka',
      courses: [
        {
          name: 'Islamic Studies',
          skills: [
            { name: 'Islamic Finance', description: 'Financial practices compliant with Islamic principles and laws.' },
            { name: 'Arabic Language', description: 'Study of the Arabic language and its literature.' }
          ]
        },
        {
          name: 'Applied Sciences',
          skills: [
            { name: 'Biotechnology', description: 'Application of biological principles and processes in technology.' },
            { name: 'Food Science', description: 'Study of food composition, processing, safety, and nutrition.' }
          ]
        }
      ]
    },
    {
      name: 'Wayamba University of Sri Lanka',
      courses: [
        {
          name: 'Hospitality Management',
          skills: [
            { name: 'Hotel Operations', description: 'Management of hotel services and facilities.' },
            { name: 'Event Management', description: 'Planning and organization of events, conferences, and functions.' }
          ]
        },
        {
          name: 'Psychology',
          skills: [
            { name: 'Counseling', description: 'Providing guidance and support to individuals facing personal or psychological issues.' },
            { name: 'Behavioral Psychology', description: 'Study of behavior and mental processes.' }
          ]
        }
      ]
    },
    {
      name: 'University of Ruhuna',
      courses: [
        {
          name: 'Engineering Faculty',
          skills: [
            { name: 'Mechanical Engineering', description: 'Design and maintenance of mechanical systems and devices.' },
            { name: 'Civil Engineering', description: 'Design and construction of infrastructure and public works projects.' }
          ]
        }
      ]
    }
  ];
  
  const opportunities = {
    'Programming Languages': {
      high: [
        {
            "image": O1,
            "company": "Tech Innovators Inc.",
            "name": "Software Engineer",
            "address": "123 Innovation Drive, Tech City",
            "linkedin": "https://linkedin.com/in/company1",
            "webpage": "https://company1.com"
          },
          {
            "image": O2,
            "company": "Creative Solutions Ltd.",
            "name": "Graphic Designer",
            "address": "456 Design Avenue, Art Town",
            "linkedin": "https://linkedin.com/in/company2",
            "webpage": "https://company2.com"
          },
          {
            "image": O3,
            "company": "Marketing Experts LLC",
            "name": "Marketing Specialist",
            "address": "789 Marketing Lane, Biz City",
            "linkedin": "https://linkedin.com/in/company3",
            "webpage": "https://company3.com"
          }
      ],
      medium: [
        {
            "image": "https://example.com/images/company1.jpg",
            "company": "Tech Innovators Inc.",
            "name": "Software Engineer",
            "address": "123 Innovation Drive, Tech City",
            "linkedin": "https://linkedin.com/in/company1",
            "webpage": "https://company1.com"
          },
          {
            "image": "https://example.com/images/company2.jpg",
            "company": "Creative Solutions Ltd.",
            "name": "Graphic Designer",
            "address": "456 Design Avenue, Art Town",
            "linkedin": "https://linkedin.com/in/company2",
            "webpage": "https://company2.com"
          },
          {
            "image": "https://example.com/images/company3.jpg",
            "company": "Marketing Experts LLC",
            "name": "Marketing Specialist",
            "address": "789 Marketing Lane, Biz City",
            "linkedin": "https://linkedin.com/in/company3",
            "webpage": "https://company3.com"
          }
      ],
      low: [
        {
            "image": "https://example.com/images/company1.jpg",
            "company": "Tech Innovators Inc.",
            "name": "Software Engineer",
            "address": "123 Innovation Drive, Tech City",
            "linkedin": "https://linkedin.com/in/company1",
            "webpage": "https://company1.com"
          },
          {
            "image": "https://example.com/images/company2.jpg",
            "company": "Creative Solutions Ltd.",
            "name": "Graphic Designer",
            "address": "456 Design Avenue, Art Town",
            "linkedin": "https://linkedin.com/in/company2",
            "webpage": "https://company2.com"
          },
          {
            "image": "https://example.com/images/company3.jpg",
            "company": "Marketing Experts LLC",
            "name": "Marketing Specialist",
            "address": "789 Marketing Lane, Biz City",
            "linkedin": "https://linkedin.com/in/company3",
            "webpage": "https://company3.com"
          }
      ]
    }
    // Add more skills and opportunities as relevant to Sri Lanka
  };
  
  export { universities, opportunities };
  