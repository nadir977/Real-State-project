import { RiDashboardLine } from "react-icons/ri";
import {
  MdOutlineSupportAgent,
  MdOutlineSchool,
  MdOutlineMapsHomeWork,
} from "react-icons/md";
import { FaUsersCog, FaChartBar } from "react-icons/fa";
import { LuFilter } from "react-icons/lu";
import { CgFileDocument } from "react-icons/cg";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { GrSystem } from "react-icons/gr";
import Group from ".././Group.svg";
import Group2 from ".././Group2.png";
import Group3 from ".././Group3.png";
import Group4 from ".././Group4.svg";
import image1 from ".././image1.svg";
import image2 from ".././image2.svg";
import image3 from ".././image3.svg";
import image4 from ".././image4.svg";
import image5 from ".././image5.svg";
import image6 from ".././image6.png";
import image7 from ".././image7.png";
import image8 from ".././image8.png";
import image9 from ".././image9.png";
import { User, Filter, BookOpen, BarChart2 } from "lucide-react";

export const sidebarItems = [
  {
    text: "Dashboard",
    icon: <RiDashboardLine />,
    path: "/",
  },
  {
    text: "Agent Management",
    icon: <MdOutlineSupportAgent />,
    path: "/agent-management",
  },
  {
    text: "Mentor Management",
    icon: <FaUsersCog />,
    path: "/mentor-management",
  },
  {
    text: "LMS/Learning",
    icon: <MdOutlineSchool />,
    path: "/lms-learning",
  },
  {
    text: "Lead Management",
    icon: <LuFilter />,
    path: "/lead-management",
  },
  {
    text: "Project Management",
    icon: <CgFileDocument />,
    path: "/project-management",
  },
  {
    text: "Developer/Builder",
    icon: <MdOutlineMapsHomeWork />,
    path: "/developer-builder",
  },
  {
    text: "Commission Management",
    icon: <HiOutlineCurrencyDollar />,
    path: "/commission-management",
  },
  {
    text: "Reports & Insights",
    icon: <FaChartBar />,
    path: "/reports-insights",
  },
  {
    text: "System Logs",
    icon: <GrSystem />,
    path: "/system-logs",
  },
];

export const statsData = [
  {
    title: "Total Agents",
    value: 156,
    image: Group,
    month: "Up from last month",
    prcent: "8.5%",
  },
  {
    title: "Active Projects",
    value: "$2.4M",
    image: Group2,
    month: "Up from last month",
    prcent: "8.5%",
  },
  {
    title: "Active Leads",
    value: 342,
    image: Group3,
    month: "Up from last month",
    prcent: "8.5%",
  },
  {
    title: "Courses Completed",
    value: "$56,700",
    image: Group4,
    month: "Up from last month",
    prcent: "8.5%",
  },
];

export const people = [
  {
    name: "Ahmed Ali",
    details: "New Agent Registered",
    time: "2 hours ago",
    imageUrl: image1,
  },
  {
    name: "Tanveer Ali",
    details: "Lead assigned to agent",
    time: "2 hours ago",
    imageUrl: image2,
  },
  {
    name: "Ahmed Ali",
    details: "Course completed",
    time: "2 hours ago",
    imageUrl: image3,
  },
  {
    name: "John Doe",
    details: "New lead created",
    time: "2 hours ago",
    imageUrl: image4,
  },
  {
    name: "John Doeler",
    details: "Commission updated",
    time: "2 hours ago",
    imageUrl: image5,
  },
];

export const leads = [
  {
    id: "L-1001",
    customer: "Ahmed Ali",
    email: "ahmed@dubai.com",
    source: "Website",
    status: "Qualified",
  },
  {
    id: "L-1002",
    customer: "Tanveer Ali",
    email: "tanveer@dubai.com",
    source: "Social Media",
    status: "contacted",
  },
  {
    id: "L-1003",
    customer: "Sara Ali",
    email: "sara@dubai360.com",
    source: "Others",
    status: "new",
  },
  {
    id: "L-1004",
    customer: "Sara Ali",
    email: "sara@dubai360.com",
    source: "Website",
    status: "Lost",
  },
  {
    id: "L-1005",
    customer: "Ahmed Ali",
    email: "ahmed@dubai.com",
    source: "Others",
    status: "Closed",
  },
  {
    id: "L-1006",
    customer: "Sara Ali",
    email: "sara@dubai360.com",
    source: "Website",
    status: "proposal",
  },
  {
    id: "L-1007",
    customer: "Tanveer Ali",
    email: "tanveer@dubai.com",
    source: "Social Media",
    status: "contacted",
  },
];

export const statusColors = {
  Qualified: "bg-green-100 text-green-600",
  contacted: "bg-orange-100 text-orange-500",
  new: "bg-purple-100 text-purple-500",
  Lost: "bg-red-100 text-red-500",
  Closed: "bg-cyan-100 text-cyan-600",
  proposal: "bg-teal-100 text-teal-500",
};

export const actions = [
  { icon: <User size={40} className="text-primary" />, title: "Add Agent" },
  { icon: <Filter size={40} className="text-primary" />, title: "Create Lead" },
  {
    icon: <BookOpen size={40} className="text-primary" />,
    title: "Add Course",
  },
  {
    icon: <BarChart2 size={40} className="text-primary" />,
    title: "View Reports",
  },
];

export const agents = [
  {
    id: 1,
    name: "John Doe",
    email: "ahmed@dubai.com",
    contact: "+971 50 123 4567",
    joiningDate: "19 Jun 2025",
    agentType: "Experienced",
    status: "Verified",
    img: image1,
  },
  {
    id: 2,
    name: "Tanveer Ali",
    email: "tanveer@dubai.com",
    contact: "+971 50 765 4321",
    joiningDate: "18 Jun 2025",
    agentType: "Fresh",
    status: "Not Verified",
    img: image2,
  },
  {
    id: 3,
    name: "Sara Ali",
    email: "sara@dubai360.com",
    contact: "+971 50 111 2222",
    joiningDate: "17 Jun 2025",
    agentType: "Experienced",
    status: "Blocked",
    img: image3,
  },
  {
    id: 4,
    name: "Sara Ali",
    email: "sara@dubai360.com",
    contact: "+971 50 111 2222",
    joiningDate: "16 Jun 2025",
    agentType: "Experienced",
    status: "Delete",
    img: image4,
  },
  {
    id: 5,
    name: "Ahmed Ali",
    email: "ahmed@dubai.com",
    contact: "+971 50 111 2222",
    joiningDate: "15 Jun 2025",
    agentType: "Experienced",
    status: "Verified",
    img: image5,
  },
  {
    id: 6,
    name: "John Doe",
    email: "ahmed@dubai.com",
    contact: "+971 50 123 4567",
    joiningDate: "19 Jun 2025",
    agentType: "Experienced",
    status: "Verified",
    img: image1,
  },
  {
    id: 7,
    name: "Tanveer Ali",
    email: "tanveer@dubai.com",
    contact: "+971 50 765 4321",
    joiningDate: "18 Jun 2025",
    agentType: "Fresh",
    status: "Not Verified",
    img: image2,
  },
  {
    id: 8,
    name: "Sara Ali",
    email: "sara@dubai360.com",
    contact: "+971 50 111 2222",
    joiningDate: "17 Jun 2025",
    agentType: "Experienced",
    status: "Blocked",
    img: image3,
  },
  {
    id: 9,
    name: "Sara Ali",
    email: "sara@dubai360.com",
    contact: "+971 50 111 2222",
    joiningDate: "16 Jun 2025",
    agentType: "Experienced",
    status: "Delete",
    img: image4,
  },
  {
    id: 10,
    name: "Ahmed Ali",
    email: "ahmed@dubai.com",
    contact: "+971 50 111 2222",
    joiningDate: "15 Jun 2025",
    agentType: "Experienced",
    status: "Verified",
    img: image5,
  },
  {
    id: 11,
    name: "Sara Ali",
    email: "sara@dubai360.com",
    contact: "+971 50 111 2222",
    joiningDate: "17 Jun 2025",
    agentType: "Experienced",
    status: "Blocked",
    img: image3,
  },
  {
    id: 12,
    name: "Sara Ali",
    email: "sara@dubai360.com",
    contact: "+971 50 111 2222",
    joiningDate: "16 Jun 2025",
    agentType: "Experienced",
    status: "Delete",
    img: image4,
  },
  {
    id: 13,
    name: "Ahmed Ali",
    email: "ahmed@dubai.com",
    contact: "+971 50 111 2222",
    joiningDate: "15 Jun 2025",
    agentType: "Experienced",
    status: "Verified",
    img: image5,
  },
  {
    id: 14,
    name: "John Doe",
    email: "ahmed@dubai.com",
    contact: "+971 50 123 4567",
    joiningDate: "19 Jun 2025",
    agentType: "Experienced",
    status: "Verified",
    img: image1,
  },
  {
    id: 15,
    name: "Tanveer Ali",
    email: "tanveer@dubai.com",
    contact: "+971 50 765 4321",
    joiningDate: "18 Jun 2025",
    agentType: "Fresh",
    status: "Not Verified",
    img: image2,
  },
];

export const courses = [
    {
      id: 1,
      title: "Real Estate Fundamentals",
      level: "Beginner",
      description: "Complete Course Covering Basic Real Estate Principles",
      modules: 8,
      students: 25,
      image: image6,
    },
    {
      id: 2,
      title: "Advanced Sales Techniques",
      level: "Advanced",
      description: "Master Advanced Selling Strategies For Luxury Properties",
      modules: 12,
      students: 15,
      image: image7,
    },
    {
      id: 3,
      title: "Real Estate Fundamentals",
      level: "Beginner",
      description: "Complete Course Covering Basic Real Estate Principles",
      modules: 8,
      students: 25,
      image: image8,
    },
    {
      id: 4,
      title: "Real Estate Fundamentals",
      level: "Beginner",
      description: "Complete Course Covering Basic Real Estate Principles",
      modules: 8,
      students: 25,
      image: image9,
    },
    {
      id: 5,
      title: "Real Estate Fundamentals",
      level: "Beginner",
      description: "Complete Course Covering Basic Real Estate Principles",
      modules: 8 ,
      students: 25,
      image: image6,
    },
    {
      id: 6,
      title: "Real Estate Fundamentals",
      level: "Beginner",
      description: "Complete Course Covering Basic Real Estate Principles",
      modules: 8,
      students: 25,
      image: image7,
    },
  ];


  export const videos = [
    {
      title: "Getting Started as an Agent",
      link: "https://www.youtube.com/watch?v=KL-kZUxYMMk",
      video: "https://www.youtube.com/shorts/ouoxSDgKRJY",
    },
    {
      title: "Client Communication Best Practices",
      link: "https://www.youtube.com/watch?v=xRmhCwhHotY",
      video: "https://www.youtube.com/shorts/qEd2YJi9JKE",
    },
    {
      title: "IProperty Valuation Techniques",
      link: "https://www.youtube.com/watch?v=8lVimK1hsZk",
      video: "https://www.youtube.com/shorts/Tm6Kq4Yl_TI",
    },
  ];