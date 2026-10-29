import { useMemo, useState, type ReactNode } from "react"

type IconName = "arrow" | "bell" | "book" | "calendar" | "chevron" | "clock" | "document" | "grid" | "help" | "home" | "menu" | "people" | "search" | "shield" | "star"
type Portal = "student" | "lecturer"
type NavItem = { label: string; icon: IconName }

const icons: Record<IconName, ReactNode> = {
  arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
  bell: <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />,
  book: (
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z" />
  ),
  calendar: (
    <path d="M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 0 1 2 2v15H3V6a2 2 0 0 1 2-2z" />
  ),
  chevron: <path d="m9 18 6-6-6-6" />,
  clock: <path d="M12 6v6l4 2M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z" />,
  document: (
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm0 0v6h6M8 13h8m-8 4h6" />
  ),
  grid: <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />,
  help: (
    <path d="M9.1 9a3 3 0 1 1 4.8 2.4c-1.1.8-1.9 1.3-1.9 2.6m0 4h.01M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z" />
  ),
  home: <path d="m3 11 9-8 9 8M5 10v10h14V10M9 20v-6h6v6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  people: (
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm13 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  ),
  search: <path d="m21 21-4.35-4.35M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0z" />,
  shield: (
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zm-3-10 2 2 4-4" />
  ),
  star: (
    <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.2L5.8 21 7 14.2l-5-4.9 6.9-1z" />
  ),
}

function Icon({ name, size = 20 }: { name: IconName size?: number }) {
  return (
    <svg
      aria-hidden="true"
      className="shrink-0"
      fill="none"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      width={size}
    >
      {icons[name]}
    </svg>
  )
}

const navItems: NavItem[] = [
  { label: "Overview", icon: "home" },
  { label: "Schedules", icon: "calendar" },
  { label: "Academics", icon: "book" },
  { label: "Student services", icon: "people" },
  { label: "Policies & forms", icon: "shield" },
  { label: "Campus life", icon: "star" },
  { label: "Help & support", icon: "help" },
]

const lecturerNavItems: NavItem[] = [
  { label: "Overview", icon: "home" },
  { label: "Teaching & modules", icon: "book" },
  { label: "Timetable", icon: "calendar" },
  { label: "Assessment & marking", icon: "document" },
  { label: "Student support", icon: "people" },
  { label: "Research", icon: "star" },
  { label: "Staff services", icon: "grid" },
  { label: "Policies & support", icon: "shield" },
]

const quickLinks: {
  title: string
  detail: string
  icon: IconName
  color: string
}[] = [
  {
    title: "Time table",
    detail: "View weekly classes",
    icon: "calendar",
    color: "red",
  },
  {
    title: "Assessment schedule",
    detail: "Deadlines and exams",
    icon: "clock",
    color: "gold",
  },
  {
    title: "Academic calendar",
    detail: "Key dates for 2026/27",
    icon: "book",
    color: "charcoal",
  },
  {
    title: "LMS login details",
    detail: "Access learning platforms",
    icon: "grid",
    color: "red",
  },
]

const categories = [
  {
    title: "Schedules & calendars",
    description: "Plan your academic year and stay ahead of key dates.",
    icon: "calendar" as IconName,
    links: [
      "Schedules",
      "Orientation",
      "Temporary",
      "Assessments",
      "Annual Events",
      "Academic Calendars",
    ],
  },
  {
    title: "Academic resources",
    description:
      "Programme documents, delivery information, and course details.",
    icon: "book" as IconName,
    links: [
      "Academic Course Delivery",
      "Program Specification",
      "Course Details",
      "UoW",
      "RGU",
    ],
  },
  {
    title: "Student services",
    description: "Support, guidance, contacts, and student relations.",
    icon: "people" as IconName,
    links: [
      "Student Complaints",
      "Facility and Support System",
      "Important Contact Details",
      "Students Relations Unit",
      "Help Desk Video Series",
    ],
  },
  {
    title: "Policies & forms",
    description: "Student policies, conduct guidance, and mitigating forms.",
    icon: "shield" as IconName,
    links: [
      "Student Policies",
      "Code of Conduct",
      "Club Policy",
      "IT Policy",
      "Mitigation Forms",
      "UoW-Late Mitigation Circumstances Form",
      "UoW-Mitigating Circumstances Form",
      "UoW-Self Certification Claim Form",
      "RGU-Coursework Extension Form - Self-Certification",
      "RGU-Deferral Request Form - Self-Certification",
      "Foundation Mitigating Circumstances Form",
    ],
  },
  {
    title: "Campus life",
    description: "Connect with the IIT community beyond the classroom.",
    icon: "star" as IconName,
    links: [
      "Houses",
      "Students' Union",
      "Clubs and Societies",
      "Participation at Conferences",
      "Participation at Competitions",
    ],
  },
  {
    title: "Information & help",
    description: "Useful information and answers to common questions.",
    icon: "help" as IconName,
    links: ["Info", "Academia FAQ", "LMS Login Details"],
  },
]

const programmes = [
  {
    group: "Undergraduate",
    items: [
      "BSc AI & DS",
      "BEng AI & DE",
      "BSc CS",
      "BEng SE",
      "BSc BDA",
      "BSc BIS",
      "BA BM",
      "BSc BC",
      "BSc FTDA",
    ],
  },
  {
    group: "Postgraduate",
    items: [
      "MSc ASE",
      "MSc CS & F",
      "MSc IT",
      "MSc BDA",
      "MSc AIE",
      "MSc BA",
      "MA in FBM",
      "MSc AAI",
    ],
  },
  {
    group: "Foundation programme",
    items: [
      "Academic Calendar",
      "Program Specification",
      "Important Contact Details",
      "Time Table",
      "Assessment Schedule",
    ],
  },
]

const notices = [
  {
    day: "24",
    month: "SEP",
    title: "Semester 01 registration is now open",
    category: "Academic",
    time: "2 hours ago",
  },
  {
    day: "19",
    month: "SEP",
    title: "Updated assessment schedule published",
    category: "Assessment",
    time: "18 September",
  },
  {
    day: "12",
    month: "SEP",
    title: "Orientation week: what you need to know",
    category: "Student life",
    time: "12 September",
  },
]

const lecturerQuickLinks: {
  title: string
  detail: string
  icon: IconName
  color: string
}[] = [
  {
    title: "My teaching timetable",
    detail: "Classes, rooms and changes",
    icon: "calendar",
    color: "red",
  },
  {
    title: "Marking dashboard",
    detail: "12 submissions pending",
    icon: "document",
    color: "gold",
  },
  {
    title: "Module spaces",
    detail: "Manage content and cohorts",
    icon: "book",
    color: "charcoal",
  },
  {
    title: "Student records",
    detail: "Attendance and progress",
    icon: "people",
    color: "red",
  },
]

const lecturerNotices = [
  {
    day: "24",
    month: "SEP",
    title: "Semester one grade submission guidance",
    category: "Academic office",
    time: "45 minutes ago",
  },
  {
    day: "22",
    month: "SEP",
    title: "Updated academic integrity process",
    category: "Quality",
    time: "22 September",
  },
  {
    day: "18",
    month: "SEP",
    title: "Applications open for research seed funding",
    category: "Research",
    time: "18 September",
  },
]

const lecturerCategories = [
  {
    title: "Teaching delivery",
    description: "Plan modules, manage classes, and access teaching materials.",
    icon: "book" as IconName,
    links: ["Module handbook templates", "Teaching plans", "Learning materials", "Class registers"],
  },
  {
    title: "Assessment & quality",
    description: "Set, moderate, mark, and return assessments consistently.",
    icon: "document" as IconName,
    links: ["Assessment briefs", "Marking rubrics", "Moderation forms", "External examiner guidance"],
  },
  {
    title: "Students & advisees",
    description: "Support student progress, wellbeing, and engagement.",
    icon: "people" as IconName,
    links: ["Advisee list", "Attendance monitoring", "At-risk referrals", "Reasonable adjustments"],
  },
  {
    title: "Research & development",
    description: "Find funding, ethics, publication, and development resources.",
    icon: "star" as IconName,
    links: ["Research ethics", "Funding opportunities", "Publication support", "Staff development"],
  },
  {
    title: "Staff services",
    description: "Everyday people, finance, room, and facilities services.",
    icon: "grid" as IconName,
    links: ["Leave & absence", "Expenses & claims", "Room booking", "HR self-service"],
  },
  {
    title: "Policies & support",
    description: "Academic regulations, staff policies, and technical help.",
    icon: "shield" as IconName,
    links: ["Academic regulations", "Staff policies", "IT service desk", "Health & safety"],
  },
]

type SectionGroup = {
  title: string
  description: string
  icon: IconName
  links: string[]
}

type SectionPageData = {
  eyebrow: string
  title: string
  description: string
  groups: SectionGroup[]
}

const sectionPages: Record<string, SectionPageData> = {
  Schedules: {
    eyebrow: "PLAN YOUR YEAR",
    title: "Schedules & calendars",
    description:
      "Find class timetables, assessment dates, orientation information, and key events across the academic year.",
    groups: [
      {
        title: "Class schedules",
        description: "Your day-to-day classes and temporary timetable updates.",
        icon: "clock",
        links: ["Time Table", "Schedules", "Temporary"],
      },
      {
        title: "Assessments",
        description: "Plan ahead for coursework deadlines and examinations.",
        icon: "document",
        links: ["Assessment Schedule", "Assessments"],
      },
      {
        title: "Academic year",
        description: "Important dates, semester milestones, and university events.",
        icon: "calendar",
        links: ["Academic Calendar", "Academic Calendars", "Orientation", "Annual Events"],
      },
    ],
  },
  Academics: {
    eyebrow: "LEARNING & PROGRAMMES",
    title: "Academic resources",
    description:
      "Explore programme information, delivery resources, course specifications, and partner university material.",
    groups: [
      {
        title: "Academic information",
        description: "Core documentation and information about your course.",
        icon: "book",
        links: ["Academic Course Delivery", "Program Specification", "Course Details"],
      },
      {
        title: "University partners",
        description: "Resources for IIT's partner university programmes.",
        icon: "grid",
        links: ["UoW", "RGU"],
      },
      {
        title: "Undergraduate",
        description: "Bachelor's degree programme resources.",
        icon: "document",
        links: programmes[0].items,
      },
      {
        title: "Postgraduate",
        description: "Master's degree programme resources.",
        icon: "star",
        links: programmes[1].items,
      },
      {
        title: "Foundation programme",
        description: "Foundation programme information and key documents.",
        icon: "people",
        links: programmes[2].items,
      },
    ],
  },
  "Student services": {
    eyebrow: "HERE TO SUPPORT YOU",
    title: "Student services",
    description:
      "Access student support, raise a concern, find important contacts, and get help with campus facilities.",
    groups: [
      {
        title: "Student support",
        description: "Guidance and services available throughout your studies.",
        icon: "people",
        links: ["Students Relations Unit", "Facility and Support System", "Important Contact Details"],
      },
      {
        title: "Complaints & feedback",
        description: "Information about raising and resolving a concern.",
        icon: "document",
        links: ["Student Complaints"],
      },
      {
        title: "Digital help",
        description: "Support for IIT's learning and campus systems.",
        icon: "help",
        links: ["Help Desk Video Series", "LMS Login Details"],
      },
    ],
  },
  "Policies & forms": {
    eyebrow: "DOCUMENTS & GUIDANCE",
    title: "Policies & forms",
    description:
      "Review student policies and download the appropriate mitigation, extension, or deferral form.",
    groups: [
      {
        title: "Student policies",
        description: "The policies and standards that guide student life at IIT.",
        icon: "shield",
        links: ["Student Policies", "Code of Conduct", "Club Policy", "IT Policy"],
      },
      {
        title: "UoW mitigation forms",
        description: "Mitigation and self-certification documents for UoW students.",
        icon: "document",
        links: [
          "UoW-Late Mitigation Circumstances Form",
          "UoW-Mitigating Circumstances Form",
          "UoW-Self Certification Claim Form",
        ],
      },
      {
        title: "RGU request forms",
        description: "Extension and deferral documents for RGU students.",
        icon: "document",
        links: [
          "RGU-Coursework Extension Form - Self-Certification",
          "RGU-Deferral Request Form - Self-Certification",
        ],
      },
      {
        title: "Other mitigation forms",
        description: "General and foundation programme mitigation resources.",
        icon: "document",
        links: ["Mitigation Forms", "Foundation Mitigating Circumstances Form"],
      },
    ],
  },
  "Campus life": {
    eyebrow: "LIFE AT IIT",
    title: "Campus life",
    description:
      "Meet your community, join a society, represent IIT, and make the most of student life.",
    groups: [
      {
        title: "Student community",
        description: "Connect with students across programmes and year groups.",
        icon: "people",
        links: ["Houses", "Students' Union", "Clubs and Societies"],
      },
      {
        title: "Opportunities",
        description: "Represent IIT and build experience outside the classroom.",
        icon: "star",
        links: ["Participation at Conferences", "Participation at Competitions"],
      },
      {
        title: "Club resources",
        description: "Guidance for participating in and managing student clubs.",
        icon: "shield",
        links: ["Club Policy", "Code of Conduct"],
      },
    ],
  },
  "Help & support": {
    eyebrow: "HOW CAN WE HELP?",
    title: "Help & support",
    description:
      "Find quick answers, useful contacts, platform guidance, and the right team to assist you.",
    groups: [
      {
        title: "Get help",
        description: "Find the right contact for academic or student support.",
        icon: "help",
        links: ["Academia FAQ", "Important Contact Details", "Info"],
      },
      {
        title: "Technical support",
        description: "Guidance for IIT systems and online learning services.",
        icon: "grid",
        links: ["Help Desk Video Series", "LMS Login Details", "IT Policy"],
      },
      {
        title: "Student relations",
        description: "Support with student experience, feedback, and concerns.",
        icon: "people",
        links: ["Students Relations Unit", "Student Complaints", "Facility and Support System"],
      },
    ],
  },
}

const lecturerSectionPages: Record<string, SectionPageData> = {
  "Teaching & modules": {
    eyebrow: "DELIVER GREAT LEARNING",
    title: "Teaching & modules",
    description:
      "Plan your teaching, manage module content, and access the practical resources you need for every class.",
    groups: [
      {
        title: "My modules",
        description: "Your active modules, cohorts, and module documentation.",
        icon: "book",
        links: ["Module dashboard", "Module specifications", "Module handbook templates", "Learning outcomes"],
      },
      {
        title: "Teaching delivery",
        description: "Tools and templates for planning and delivering sessions.",
        icon: "calendar",
        links: ["Teaching plans", "Learning materials", "Class registers", "Room booking"],
      },
      {
        title: "Learning platforms",
        description: "Manage digital learning spaces and classroom technology.",
        icon: "grid",
        links: ["LMS module spaces", "Lecture capture", "Virtual classroom", "Digital learning guidance"],
      },
    ],
  },
  Timetable: {
    eyebrow: "PLAN YOUR WEEK",
    title: "Timetable & rooms",
    description:
      "View your teaching schedule, check room details, and keep track of timetable changes.",
    groups: [
      {
        title: "Teaching schedule",
        description: "Your current classes, labs, and supervision sessions.",
        icon: "clock",
        links: ["My teaching timetable", "Weekly class schedule", "Supervision calendar"],
      },
      {
        title: "Rooms & changes",
        description: "Find rooms and request or review timetable changes.",
        icon: "calendar",
        links: ["Room directory", "Room booking", "Timetable change requests", "Temporary room changes"],
      },
      {
        title: "Academic dates",
        description: "Key teaching, assessment, and committee dates.",
        icon: "calendar",
        links: ["Academic calendar", "Assessment periods", "Board dates", "Annual events"],
      },
    ],
  },
  "Assessment & marking": {
    eyebrow: "ASSESS FAIRLY",
    title: "Assessment & marking",
    description:
      "Create assessments, manage submissions, apply marking standards, and prepare results for boards.",
    groups: [
      {
        title: "Assessment design",
        description: "Build clear, inclusive assessments aligned to module outcomes.",
        icon: "document",
        links: ["Assessment briefs", "Marking rubrics", "Assessment design guidance", "Academic integrity"],
      },
      {
        title: "Marking & feedback",
        description: "Access submissions, marking workflows, and feedback guidance.",
        icon: "document",
        links: ["Marking dashboard", "Online submissions", "Feedback guidance", "Grade descriptors"],
      },
      {
        title: "Quality assurance",
        description: "Complete moderation and prepare confirmed marks.",
        icon: "shield",
        links: ["Moderation forms", "External examiner guidance", "Grade submission", "Assessment boards"],
      },
    ],
  },
  "Student support": {
    eyebrow: "SUPPORT EVERY STUDENT",
    title: "Student support",
    description:
      "Monitor engagement, support advisees, and connect students with the right specialist service.",
    groups: [
      {
        title: "Academic advising",
        description: "Manage meetings, notes, and actions for your advisees.",
        icon: "people",
        links: ["Advisee list", "Adviser meeting notes", "Student progress", "Programme contacts"],
      },
      {
        title: "Engagement & wellbeing",
        description: "Identify concerns early and make an appropriate referral.",
        icon: "help",
        links: ["Attendance monitoring", "At-risk referrals", "Wellbeing referrals", "Safeguarding guidance"],
      },
      {
        title: "Inclusive learning",
        description: "Understand and apply approved learning support.",
        icon: "shield",
        links: ["Reasonable adjustments", "Inclusive teaching guidance", "Extenuating circumstances"],
      },
    ],
  },
  Research: {
    eyebrow: "CREATE & DISCOVER",
    title: "Research",
    description:
      "Develop your research, find funding, complete ethics review, and share your work.",
    groups: [
      {
        title: "Research governance",
        description: "Policies, ethics processes, and responsible research guidance.",
        icon: "shield",
        links: ["Research ethics", "Ethics application", "Research data management", "Research policies"],
      },
      {
        title: "Funding & projects",
        description: "Discover opportunities and manage active research projects.",
        icon: "star",
        links: ["Funding opportunities", "Internal seed funding", "Project approvals", "Research partnerships"],
      },
      {
        title: "Publishing & impact",
        description: "Support for publications, profiles, and research impact.",
        icon: "book",
        links: ["Publication support", "Open access", "Research profiles", "Impact resources"],
      },
    ],
  },
  "Staff services": {
    eyebrow: "YOUR WORKPLACE",
    title: "Staff services",
    description:
      "Access HR, finance, professional development, facilities, and everyday staff services.",
    groups: [
      {
        title: "People & development",
        description: "Manage your employment details, leave, and development.",
        icon: "people",
        links: ["HR self-service", "Leave & absence", "Staff development", "Vacancies"],
      },
      {
        title: "Finance & travel",
        description: "Submit claims and access purchasing and travel guidance.",
        icon: "document",
        links: ["Expenses & claims", "Purchase requests", "Travel guidance", "Project finance"],
      },
      {
        title: "Campus services",
        description: "Book spaces and request practical campus support.",
        icon: "grid",
        links: ["Room booking", "Facilities requests", "Staff directory", "Parking & access"],
      },
    ],
  },
  "Policies & support": {
    eyebrow: "GUIDANCE & HELP",
    title: "Policies & support",
    description:
      "Find institutional policies, academic regulations, and support for systems and services.",
    groups: [
      {
        title: "Academic policies",
        description: "Regulations and processes for teaching and assessment.",
        icon: "book",
        links: ["Academic regulations", "Assessment regulations", "Academic integrity", "Quality handbook"],
      },
      {
        title: "Staff policies",
        description: "Current employment, conduct, and workplace guidance.",
        icon: "shield",
        links: ["Staff policies", "Code of conduct", "Data protection", "Health & safety"],
      },
      {
        title: "Technical support",
        description: "Get help with accounts, devices, classrooms, and systems.",
        icon: "help",
        links: ["IT service desk", "Account & password help", "Classroom support", "Systems status"],
      },
    ],
  },
}

function SectionPage({
  page,
  onOpen,
}: {
  page: SectionPageData
  onOpen: (resource: string) => void
}) {
  return (
    <div className="section-page">
      <section className="page-hero">
        <div>
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p>{page.description}</p>
        </div>
        <div className="page-hero-mark">
          <Icon name={page.groups[0].icon} size={29} />
        </div>
      </section>

      <div className="section-page-toolbar">
        <p>
          <strong>{page.groups.reduce((total, group) => total + group.links.length, 0)}</strong>{" "}
          available resources
        </p>
        <button>
          <Icon name="search" size={16} /> Find a resource
        </button>
      </div>

      <section className="section-group-grid">
        {page.groups.map((group) => (
          <article className="section-group-card" key={group.title}>
            <div className="section-group-heading">
              <span>
                <Icon name={group.icon} size={21} />
              </span>
              <div>
                <h2>{group.title}</h2>
                <p>{group.description}</p>
              </div>
            </div>
            <ul>
              {group.links.map((link) => (
                <li key={link}>
                  <button onClick={() => onOpen(link)}>
                    <span>
                      <Icon name="document" size={16} />
                      {link}
                    </span>
                    <Icon name="chevron" size={16} />
                  </button>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </div>
  )
}

function ResourceDetail({
  title,
  section,
  portal,
  onBack,
}: {
  title: string
  section: string
  portal: Portal
  onBack: () => void
}) {
  const isForm = /form|claim|request|mitigat|certification/i.test(title)
  const isSchedule = /schedule|calendar|time table|orientation|assessment/i.test(title)

  return (
    <div className="detail-page">
      <button className="back-button" onClick={onBack}>
        <span aria-hidden="true">←</span> Back to {section}
      </button>

      <section className="detail-hero">
        <div className="detail-icon">
          <Icon
            name={isForm ? "document" : isSchedule ? "calendar" : "book"}
            size={27}
          />
        </div>
        <div>
          <p className="eyebrow">{section.toUpperCase()}</p>
          <h1>{title}</h1>
          <p>
            Find the latest information and resources for {title.toLowerCase()}.
          </p>
        </div>
      </section>

      <div className="detail-layout">
        <section className="panel detail-main">
          <div className="section-heading">
            <div>
              <p className="eyebrow">OVERVIEW</p>
              <h2>About this resource</h2>
            </div>
          </div>
          <p>
            This page provides {portal === "student" ? "students" : "lecturers"} with the
            current IIT guidance and documents relating to {title.toLowerCase()}.
            Please check this page regularly for updates.
          </p>
          <div className="detail-notice">
            <Icon name="bell" size={18} />
            <div>
              <strong>Latest information</strong>
              <span>Content was last reviewed for the 2026/27 academic year.</span>
            </div>
          </div>
        </section>

        <aside className="panel detail-actions">
          <p className="eyebrow">QUICK ACTIONS</p>
          <h2>{isForm ? "Available documents" : "Useful links"}</h2>
          <button>
            <span>
              <Icon name={isForm ? "document" : "arrow"} size={17} />
              {isForm ? "Open document" : "View latest information"}
            </span>
            <Icon name="chevron" size={16} />
          </button>
          <button>
            <span>
              <Icon name="help" size={17} />
              Contact {portal === "student" ? "student support" : "staff support"}
            </span>
            <Icon name="chevron" size={16} />
          </button>
        </aside>
      </div>
    </div>
  )
}

function LecturerOverview({ onOpen }: { onOpen: (resource: string) => void }) {
  return (
    <>
      <section className="welcome">
        <div>
          <p className="eyebrow">LECTURER PORTAL · 2026/27</p>
          <h1>Good morning, Dr Perera.</h1>
          <p>Your teaching, students, and staff services in one focused workspace.</p>
        </div>
        <div className="date-card">
          <div>
            <span>Today</span>
            <strong>24 September 2026</strong>
          </div>
          <Icon name="calendar" size={23} />
        </div>
      </section>

      <section className="quick-grid" aria-label="Lecturer quick access">
        {lecturerQuickLinks.map((item) => (
          <button className="quick-card" key={item.title} onClick={() => onOpen(item.title)}>
            <span className={`quick-icon ${item.color}`}>
              <Icon name={item.icon} size={22} />
            </span>
            <span>
              <strong>{item.title}</strong>
              <small>{item.detail}</small>
            </span>
            <Icon name="chevron" size={18} />
          </button>
        ))}
      </section>

      <div className="content-grid">
        <section className="panel notices-panel">
          <div className="section-heading">
            <div>
              <p className="eyebrow">STAFF BULLETIN</p>
              <h2>Latest notices</h2>
            </div>
            <button className="text-button">
              View all <Icon name="arrow" size={16} />
            </button>
          </div>
          <div className="notice-list">
            {lecturerNotices.map((notice) => (
              <button className="notice" key={notice.title} onClick={() => onOpen(notice.title)}>
                <span className="notice-date">
                  <strong>{notice.day}</strong>
                  <small>{notice.month}</small>
                </span>
                <span className="notice-copy">
                  <span className="badge">{notice.category}</span>
                  <strong>{notice.title}</strong>
                  <small>{notice.time}</small>
                </span>
                <Icon name="chevron" size={18} />
              </button>
            ))}
          </div>
        </section>

        <section className="panel upcoming-panel">
          <div className="section-heading">
            <div>
              <p className="eyebrow">YOUR DAY</p>
              <h2>Coming up</h2>
            </div>
            <button className="icon-button subtle" aria-label="Open teaching calendar">
              <Icon name="calendar" size={19} />
            </button>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-dot red" />
              <div>
                <small>09:00 – 10:30</small>
                <strong>Advanced Software Engineering</strong>
                <span>Level 4 · Room 401</span>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-dot gold" />
              <div>
                <small>11:00 – 12:00</small>
                <strong>Advisee appointments</strong>
                <span>Staff office · 3 students</span>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-dot dark" />
              <div>
                <small>14:00 – 15:30</small>
                <strong>Programme committee</strong>
                <span>Boardroom · Level 6</span>
              </div>
            </div>
          </div>
          <button className="outline-button" onClick={() => onOpen("My teaching timetable")}>
            Open full timetable <Icon name="arrow" size={16} />
          </button>
        </section>
      </div>

      <section className="resources-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">LECTURER TOOLKIT</p>
            <h2>Teaching & staff resources</h2>
          </div>
          <p className="section-note">Frequently used tools, organised around your work.</p>
        </div>
        <div className="resource-grid">
          {lecturerCategories.map((category) => (
            <article className="resource-card" key={category.title}>
              <div className="resource-title">
                <span>
                  <Icon name={category.icon} size={21} />
                </span>
                <div>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>
              </div>
              <ul>
                {category.links.map((link) => (
                  <li key={link}>
                    <button onClick={() => onOpen(link)}>
                      {link}
                      <Icon name="chevron" size={15} />
                    </button>
                  </li>
                ))}
              </ul>
              <button className="card-link">
                Explore this area <Icon name="arrow" size={16} />
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="lecturer-focus">
        <div>
          <p className="eyebrow light">THIS SEMESTER</p>
          <h2>Keep teaching on track</h2>
          <p>At-a-glance priorities for your active modules and advisees.</p>
        </div>
        <div className="focus-stats">
          <button onClick={() => onOpen("Module dashboard")}>
            <strong>4</strong>
            <span>Active modules</span>
          </button>
          <button onClick={() => onOpen("Marking dashboard")}>
            <strong>12</strong>
            <span>Items to mark</span>
          </button>
          <button onClick={() => onOpen("Advisee list")}>
            <strong>18</strong>
            <span>Advisees</span>
          </button>
        </div>
      </section>
    </>
  )
}

function LoginPage({ onLogin }: { onLogin: (portal: Portal) => void }) {
  const [selectedPortal, setSelectedPortal] = useState<Portal>("student")
  const [accountId, setAccountId] = useState("")
  const [password, setPassword] = useState("")

  return (
    <main className="login-page">
      <section className="login-intro">
        <img src="/iit-logo.png" alt="Informatics Institute of Technology" />
        <div>
          <p className="eyebrow light">IIT INTRANET · 2026/27</p>
          <h1>One place for your IIT day.</h1>
          <p>
            Access academic resources, schedules, services, and the tools
            tailored to your role.
          </p>
        </div>
        <p className="login-copyright">© IIT 2026 · All rights reserved</p>
      </section>

      <section className="login-panel">
        <form
          className="login-card"
          onSubmit={(event) => {
            event.preventDefault()
            onLogin(selectedPortal)
          }}
        >
          <div className="login-heading">
            <p className="eyebrow">WELCOME BACK</p>
            <h2>Sign in to the intranet</h2>
            <p>First, choose the portal that matches your IIT account.</p>
          </div>

          <fieldset className="role-options">
            <legend>Choose your account type</legend>
            <button
              className={selectedPortal === "student" ? "active" : ""}
              type="button"
              onClick={() => setSelectedPortal("student")}
            >
              <span className="role-icon">
                <Icon name="book" size={22} />
              </span>
              <span>
                <strong>Student</strong>
                <small>Courses, schedules and student services</small>
              </span>
              <span className="role-radio" />
            </button>
            <button
              className={selectedPortal === "lecturer" ? "active" : ""}
              type="button"
              onClick={() => setSelectedPortal("lecturer")}
            >
              <span className="role-icon">
                <Icon name="people" size={22} />
              </span>
              <span>
                <strong>Lecturer</strong>
                <small>Teaching, marking and staff services</small>
              </span>
              <span className="role-radio" />
            </button>
          </fieldset>

          <label className="login-field">
            <span>{selectedPortal === "student" ? "Student ID" : "Staff email or ID"}</span>
            <input
              autoComplete="username"
              onChange={(event) => setAccountId(event.target.value)}
              placeholder={selectedPortal === "student" ? "Enter your student ID" : "Enter your staff email or ID"}
              required
              value={accountId}
            />
          </label>

          <label className="login-field">
            <span>Password</span>
            <input
              autoComplete="current-password"
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              required
              type="password"
              value={password}
            />
          </label>

          <div className="login-meta">
            <label>
              <input type="checkbox" /> Keep me signed in
            </label>
            <button type="button">Forgot password?</button>
          </div>

          <button className="login-submit" type="submit">
            Sign in as {selectedPortal === "student" ? "student" : "lecturer"}
            <Icon name="arrow" size={18} />
          </button>

          <div className="login-help">
            <Icon name="help" size={17} />
            <span>
              Having trouble signing in? <button type="button">Contact IT support</button>
            </span>
          </div>
        </form>
      </section>
    </main>
  )
}

export default function App() {
  const [portal, setPortal] = useState<Portal | null>(null)
  const [activeNav, setActiveNav] = useState("Overview")
  const [selectedResource, setSelectedResource] = useState<string | null>(null)
  const [query, setQuery] = useState("")
  const [mobileOpen, setMobileOpen] = useState(false)

  const searchResults = useMemo(() => {
    if (!query.trim()) return []
    const allItems =
      portal === "student"
        ? [
            ...categories.flatMap((category) => category.links),
            ...programmes.flatMap((programme) => programme.items),
          ]
        : lecturerCategories.flatMap((category) => category.links)
    return [...new Set(allItems)]
      .filter((item) => item.toLowerCase().includes(query.toLowerCase()))
      .slice(0, 7)
  }, [portal, query])

  const currentNavItems = portal === "student" ? navItems : lecturerNavItems
  const currentSectionPages = portal === "student" ? sectionPages : lecturerSectionPages

  if (!portal) {
    return (
      <LoginPage
        onLogin={(selectedPortal) => {
          setPortal(selectedPortal)
          setActiveNav("Overview")
          setSelectedResource(null)
          setQuery("")
        }}
      />
    )
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">
          <img src="/iit-logo.png" alt="Informatics Institute of Technology" />
        </div>

        <div className="search-wrap">
          <Icon name="search" size={19} />
          <input
            aria-label="Search the intranet"
            onChange={(event) => setQuery(event.target.value)}
            placeholder={
              portal === "student"
                ? "Search resources, forms, courses..."
                : "Search teaching, students, staff services..."
            }
            type="search"
            value={query}
          />
          {query && (
            <div className="search-results">
              <p>
                {searchResults.length
                  ? "Suggested results"
                  : "No results found"}
              </p>
              {searchResults.map((result) => (
                <button
                  key={result}
                  onClick={() => {
                    setSelectedResource(result)
                    setQuery("")
                  }}
                >
                  <Icon name="document" size={17} />
                  <span>{result}</span>
                  <Icon name="chevron" size={15} />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="top-actions">
          <button className="icon-button" aria-label="Notifications">
            <Icon name="bell" size={21} />
            <span className="notification-dot" />
          </button>
          <div className="user">
            <div className="avatar">{portal === "student" ? "SA" : "AP"}</div>
            <div>
              <strong>{portal === "student" ? "Student Account" : "Dr A. Perera"}</strong>
              <span>{portal === "student" ? "2026/27" : "Lecturer"}</span>
            </div>
          </div>
          <button
            className="sign-out"
            onClick={() => {
              setPortal(null)
              setMobileOpen(false)
            }}
          >
            Sign out
          </button>
          <button
            className="mobile-menu"
            aria-label="Open menu"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <Icon name="menu" size={24} />
          </button>
        </div>
      </header>

      <aside className={`sidebar ${mobileOpen ? "is-open" : ""}`}>
        <nav aria-label="Main navigation">
          <p className="nav-eyebrow">
            {portal === "student" ? "STUDENT INTRANET" : "LECTURER INTRANET"}
          </p>
          {currentNavItems.map((item) => (
            <button
              className={activeNav === item.label ? "active" : ""}
              key={item.label}
              onClick={() => {
                setActiveNav(item.label)
                setSelectedResource(null)
                setMobileOpen(false)
              }}
            >
              <Icon name={item.icon} size={19} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="sidebar-help">
          <div className="help-icon">
            <Icon name="help" size={20} />
          </div>
          <strong>Need some help?</strong>
          <p>
            {portal === "student"
              ? "Find answers or contact the student support team."
              : "Get help with teaching systems or contact the staff support team."}
          </p>
          <button>
            {portal === "student" ? "Visit help centre" : "Open staff help"}
            <Icon name="arrow" size={16} />
          </button>
        </div>
        <button
          className="sidebar-sign-out"
          onClick={() => {
            setPortal(null)
            setMobileOpen(false)
          }}
        >
          Sign out and change account
          <Icon name="arrow" size={15} />
        </button>
        <p className="copyright">© IIT 2026 · All rights reserved</p>
      </aside>

      <main>
        {selectedResource ? (
          <ResourceDetail
            title={selectedResource}
            section={activeNav}
            portal={portal}
            onBack={() => setSelectedResource(null)}
          />
        ) : portal === "lecturer" && activeNav === "Overview" ? (
          <LecturerOverview onOpen={setSelectedResource} />
        ) : activeNav === "Overview" ? (
          <>
        <section className="welcome">
          <div>
            <p className="eyebrow">STUDENT PORTAL · 2026/27</p>
            <h1>Good morning, Sam.</h1>
            <p>
              Everything you need for your academic journey, all in one place.
            </p>
          </div>
          <div className="date-card">
            <div>
              <span>Today</span>
              <strong>24 September 2026</strong>
            </div>
            <Icon name="calendar" size={23} />
          </div>
        </section>

        <section className="quick-grid" aria-label="Quick access">
          {quickLinks.map((item) => (
            <button
              className="quick-card"
              key={item.title}
              onClick={() => setSelectedResource(item.title)}
            >
              <span className={`quick-icon ${item.color}`}>
                <Icon name={item.icon} size={22} />
              </span>
              <span>
                <strong>{item.title}</strong>
                <small>{item.detail}</small>
              </span>
              <Icon name="chevron" size={18} />
            </button>
          ))}
        </section>

        <div className="content-grid">
          <section className="panel notices-panel">
            <div className="section-heading">
              <div>
                <p className="eyebrow">STAY INFORMED</p>
                <h2>Latest notices</h2>
              </div>
              <button className="text-button">
                View all <Icon name="arrow" size={16} />
              </button>
            </div>
            <div className="notice-list">
              {notices.map((notice) => (
                <button className="notice" key={notice.title}>
                  <span className="notice-date">
                    <strong>{notice.day}</strong>
                    <small>{notice.month}</small>
                  </span>
                  <span className="notice-copy">
                    <span className="badge">{notice.category}</span>
                    <strong>{notice.title}</strong>
                    <small>{notice.time}</small>
                  </span>
                  <Icon name="chevron" size={18} />
                </button>
              ))}
            </div>
          </section>

          <section className="panel upcoming-panel">
            <div className="section-heading">
              <div>
                <p className="eyebrow">YOUR WEEK</p>
                <h2>Coming up</h2>
              </div>
              <button className="icon-button subtle" aria-label="Open calendar">
                <Icon name="calendar" size={19} />
              </button>
            </div>
            <div className="timeline">
              <div className="timeline-item">
                <span className="timeline-dot red" />
                <div>
                  <small>10:00 – 11:30</small>
                  <strong>Artificial Intelligence</strong>
                  <span>Level 3 · Lab 02</span>
                </div>
              </div>
              <div className="timeline-item">
                <span className="timeline-dot gold" />
                <div>
                  <small>13:00 – 14:30</small>
                  <strong>Software Engineering</strong>
                  <span>Level 4 · Room 401</span>
                </div>
              </div>
              <div className="timeline-item">
                <span className="timeline-dot dark" />
                <div>
                  <small>16:00 deadline</small>
                  <strong>Coursework submission</strong>
                  <span>Data Structures · LMS</span>
                </div>
              </div>
            </div>
            <button className="outline-button">
              Open full schedule <Icon name="arrow" size={16} />
            </button>
          </section>
        </div>

        <section className="resources-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">EXPLORE</p>
              <h2>Resources & services</h2>
            </div>
            <p className="section-note">
              Frequently used information, organised by category.
            </p>
          </div>
          <div className="resource-grid">
            {categories.map((category) => (
              <article className="resource-card" key={category.title}>
                <div className="resource-title">
                  <span>
                    <Icon name={category.icon} size={21} />
                  </span>
                  <div>
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                  </div>
                </div>
                <ul>
                  {category.links.slice(0, 4).map((link) => (
                    <li key={link}>
                      <button onClick={() => setSelectedResource(link)}>
                        {link}
                        <Icon name="chevron" size={15} />
                      </button>
                    </li>
                  ))}
                </ul>
                <button className="card-link">
                  View all {category.links.length} resources{" "}
                  <Icon name="arrow" size={16} />
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="programmes-section">
          <div className="programmes-intro">
            <p className="eyebrow light">PROGRAMMES</p>
            <h2>Find your course resources</h2>
            <p>
              Access programme specifications, module details, calendars, and
              course-specific information.
            </p>
          </div>
          <div className="programme-columns">
            {programmes.map((programme) => (
              <div key={programme.group}>
                <h3>{programme.group}</h3>
                <ul>
                  {programme.items.map((item) => (
                    <li key={item}>
                      <button onClick={() => setSelectedResource(item)}>
                        {item}
                        <Icon name="chevron" size={14} />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
          </>
        ) : (
          <SectionPage
            page={currentSectionPages[activeNav]}
            onOpen={setSelectedResource}
          />
        )}
      </main>
      {mobileOpen && (
        <button
          className="scrim"
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </div>
  )
}
