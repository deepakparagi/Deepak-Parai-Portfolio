import { useState, useMemo } from 'react';
import { Github } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import ProjectFilter from '../components/ProjectFilter';
import ProjectCard from '../components/ProjectCard';
import { projectsData, getCategories, getAllTags } from '../data/projectsData';

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedTags, setSelectedTags] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const categories = getCategories();
    const allTags = getAllTags();

    // Filter projects based on all criteria
    const filteredProjects = useMemo(() => {
        let filtered = [...projectsData];

        // Filter by category
        if (selectedCategory !== "All") {
            filtered = filtered.filter(project => project.category === selectedCategory);
        }

        // Filter by tags
        if (selectedTags.length > 0) {
            filtered = filtered.filter(project =>
                selectedTags.every(tag => project.tags.includes(tag))
            );
        }

        // Filter by search query
        if (searchQuery.trim()) {
            const lowerQuery = searchQuery.toLowerCase();
            filtered = filtered.filter(project =>
                project.title.toLowerCase().includes(lowerQuery) ||
                project.description.toLowerCase().includes(lowerQuery) ||
                project.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
            );
        }

        return filtered;
    }, [selectedCategory, selectedTags, searchQuery]);

    const handleTagToggle = (tag) => {
        setSelectedTags(prev =>
            prev.includes(tag)
                ? prev.filter(t => t !== tag)
                : [...prev, tag]
        );
    };

    const handleClearFilters = () => {
        setSelectedCategory("All");
        setSelectedTags([]);
        setSearchQuery("");
    };

    return (
        <section id="projects" className="relative py-32 flex flex-col justify-center overflow-hidden bg-background">

            <div className="relative z-10 px-6 md:px-12 max-w-screen-2xl mx-auto w-full">

                {/* Header Section */}
                <div className="mb-20 grid md:grid-cols-2 gap-12 items-end">
                    <ScrollReveal width="100%">
                        <h2 className="text-sm font-medium text-secondary mb-4 uppercase tracking-wider">01 / Selected Work</h2>
                        <h3 className="text-4xl md:text-5xl font-display font-semibold text-primary leading-tight">
                            Digital products <br /> crafted with care.
                        </h3>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2} width="100%">
                        <p className="text-secondary text-lg leading-relaxed max-w-md md:ml-auto">
                            A selection of projects where I've helped bridge the gap between design and engineering.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Filter Component */}
                <ProjectFilter
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                    selectedTags={selectedTags}
                    onTagToggle={handleTagToggle}
                    availableTags={allTags}
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                    onClearFilters={handleClearFilters}
                />

                {/* Projects List */}
                <div className="flex flex-col gap-8">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((proj, i) => (
                            <ProjectCard
                                key={proj.id}
                                index={i}
                                project={proj}
                            />
                        ))
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-secondary text-lg">No projects found matching your criteria.</p>
                            <button
                                onClick={handleClearFilters}
                                className="mt-4 text-primary hover:text-accent transition-colors underline"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>

                <div className="mt-24 text-center">
                    <ScrollReveal delay={0.4} width="100%">
                        <a
                            href="https://github.com/deepakparagi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 text-secondary hover:text-primary transition-colors duration-300 font-medium px-6 py-3 rounded-full border border-primary/10 hover:border-primary/30 hover:bg-surface"
                            aria-label="View GitHub archive"
                        >
                            <span>View Archive</span>
                            <Github size={18} />
                        </a>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default Projects;
