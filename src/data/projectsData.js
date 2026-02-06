import bipinSchoolImg from '../assets/bipin_school_hero.png';
import project2Fitai from '../assets/Screenshot (63).png';
import witnestImg from '../assets/witnest_joke_generator.webp';
import signifyImg from '../assets/signify_studio.webp';

export const projectsData = [
    {
        id: "01",
        title: "Bipin Chikkatti School",
        category: "Web Development",
        description: "Designed and developed the official website for Bipin Chikkatti School, Gadag. The platform features sections for academics, admissions, faculty, and facilities, serving as a comprehensive digital hub for the school community.",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "https://www.chikkattieducation.co.in/",
        github: "https://github.com/deepakparagi/bipin-chikkatti-school",
        image: bipinSchoolImg,
        featured: true,
        // Extended details for ProjectDetails page
        period: "2024",
        overview: "Designed and developed the official website for Bipin Chikkatti School, Gadag. The platform features sections for academics, admissions, faculty, and facilities, serving as a comprehensive digital hub for the school community.",
        challenge: "The school required a modern, mobile-friendly platform to replace outdated communication methods and provide easy access to information for parents and prospective students.",
        solution: "Developed a high-performance, responsive React application with Tailwind CSS. Focused on accessibility, clear navigation, and a professional design language that reflects the school's values.",
        stack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
        metrics: {
            technologies: 3,
            year: 2024
        }
    },
    {
        id: "02",
        title: "AI Fitness Coach",
        category: "Artificial Intelligence",
        description: "A personalized workout planner powered by OpenAI, generating custom routines based on user goals and equipment availability.",
        tags: ["React.js", "TailwindCSS", "OpenAI API"],
        link: "https://ai-fitness-coach-git-main-deepaks-projects-f551996f.vercel.app/",
        github: "https://github.com/deepakparagi/ai-fitness-coach",
        image: project2Fitai,
        featured: true,
        // Extended details for ProjectDetails page
        period: "2024",
        overview: "A personalized workout planner powered by OpenAI that generates custom routines based on user goals and equipment availability.",
        challenge: "Users often struggle to create effective workout plans that match their specific constraints (time, equipment, injuries). Generic apps lack personalization.",
        solution: "Integrated GPT-4 to analyze user inputs and generate scientifically-backed workout splits. Implemented a drag-and-drop interface for users to tweak the generated plans.",
        stack: ["React.js", "TailwindCSS", "OpenAI API", "JavaScript"],
        metrics: {
            technologies: 3,
            year: 2024
        },
        lessonsLearned: [
            "Effective prompt engineering is crucial for consistent AI outputs",
            "User feedback loops improve AI-generated content quality",
            "Balancing AI automation with user control enhances UX"
        ]
    },
    {
        id: "03",
        title: "WitNest Joke Generator",
        category: "Web Application",
        description: "An interactive entertainment platform that fetches and displays jokes dynamically through external APIs with a clean, engaging user interface.",
        tags: ["HTML", "CSS", "JavaScript", "API Integration"],
        link: "https://witnest-joke-generator.vercel.app/",
        github: "https://github.com/deepakparagi/witnest-joke-generator",
        image: witnestImg,
        featured: false,
        // Extended details for ProjectDetails page
        period: "2023",
        overview: "An interactive entertainment platform fetching dynamic content via external APIs with a focus on clean UI and seamless user experience.",
        challenge: "Creating a seamless and engaging user experience for consuming dynamic content from API responses while maintaining fast load times and error handling.",
        solution: "Built a reactive UI that fetches and displays jokes instantly, with social sharing capabilities, error handling, and a minimalist design that puts content first.",
        stack: ["HTML5", "CSS3", "JavaScript", "REST API"],
        metrics: {
            technologies: 3,
            year: 2023
        },
        lessonsLearned: [
            "API error handling is essential for good UX",
            "Simple, focused interfaces often perform better than complex ones",
            "Caching API responses improves performance"
        ]
    },
    {
        id: "04",
        title: "Signify Studio",
        category: "Frontend Development",
        description: "A premium landing page template for creative agencies featuring smooth scroll animations, responsive layouts, and modern design aesthetics.",
        tags: ["HTML", "CSS", "JavaScript", "Animations"],
        link: "https://signify-studio-wine.vercel.app/",
        github: "https://github.com/deepakparagi/signify-studio",
        image: signifyImg,
        featured: false,
        // Extended details for ProjectDetails page
        period: "2023",
        overview: "A premium landing page template for creative agencies, featuring smooth scroll animations and responsive layout that showcases modern frontend capabilities.",
        challenge: "Demonstrating high-end frontend capabilities with complex animations and layout requirements while maintaining performance and accessibility.",
        solution: "Implemented ScrollReveal animations, fluid responsive design using modern CSS techniques, and optimized asset loading for smooth performance across all devices.",
        stack: ["HTML5", "CSS3", "JavaScript", "ScrollReveal"],
        metrics: {
            technologies: 3,
            year: 2023
        },
        lessonsLearned: [
            "Performance matters - animations must be 60fps",
            "Mobile-first design simplifies responsive implementation",
            "CSS Grid and Flexbox together create powerful layouts"
        ]
    }
];

// Helper functions for filtering
export const getProjectById = (id) => {
    return projectsData.find(project => project.id === id);
};

export const getProjectsByCategory = (category) => {
    if (category === "All" || !category) return projectsData;
    return projectsData.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
    return projectsData.filter(project => project.featured);
};

export const searchProjects = (query) => {
    const lowerQuery = query.toLowerCase();
    return projectsData.filter(project =>
        project.title.toLowerCase().includes(lowerQuery) ||
        project.description.toLowerCase().includes(lowerQuery) ||
        project.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
};

export const getCategories = () => {
    return ["All", ...new Set(projectsData.map(project => project.category))];
};

export const getAllTags = () => {
    const allTags = projectsData.flatMap(project => project.tags);
    return [...new Set(allTags)];
};

export default projectsData;
