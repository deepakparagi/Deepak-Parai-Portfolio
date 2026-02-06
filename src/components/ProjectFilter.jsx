import { motion } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { useState } from 'react';
import PropTypes from 'prop-types';

const ProjectFilter = ({
    categories,
    selectedCategory,
    onCategoryChange,
    selectedTags,
    onTagToggle,
    availableTags,
    searchQuery,
    onSearchChange,
    onClearFilters
}) => {
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    const hasActiveFilters = selectedCategory !== "All" || selectedTags.length > 0 || searchQuery.length > 0;

    return (
        <div className="mb-16 space-y-6">
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
                <div className={`relative flex items-center transition-all duration-300 ${isSearchFocused ? 'ring-2 ring-primary/20' : ''
                    }`}>
                    <Search
                        size={20}
                        className="absolute left-4 text-secondary pointer-events-none"
                    />
                    <input
                        type="text"
                        placeholder="Search projects by name, description, or technology..."
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                        onFocus={() => setIsSearchFocused(true)}
                        onBlur={() => setIsSearchFocused(false)}
                        className="w-full pl-12 pr-12 py-4 bg-surface border border-primary/10 rounded-2xl text-primary placeholder-secondary/50 focus:outline-none focus:border-primary/30 transition-all duration-300"
                        aria-label="Search projects"
                    />
                    {searchQuery && (
                        <button
                            onClick={() => onSearchChange('')}
                            className="absolute right-4 text-secondary hover:text-primary transition-colors"
                            aria-label="Clear search"
                        >
                            <X size={20} />
                        </button>
                    )}
                </div>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => onCategoryChange(category)}
                        className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${selectedCategory === category
                                ? 'bg-primary text-background shadow-lg shadow-primary/20'
                                : 'bg-surface border border-primary/10 text-secondary hover:border-primary/30 hover:text-primary'
                            }`}
                        aria-pressed={selectedCategory === category}
                        aria-label={`Filter by ${category}`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Technology Tags */}
            {availableTags.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2">
                    {availableTags.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => onTagToggle(tag)}
                            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-300 ${selectedTags.includes(tag)
                                    ? 'bg-accent/20 text-accent border border-accent/30'
                                    : 'bg-background border border-primary/5 text-secondary/70 hover:border-primary/20 hover:text-primary'
                                }`}
                            aria-pressed={selectedTags.includes(tag)}
                            aria-label={`Filter by ${tag}`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            )}

            {/* Clear Filters Button */}
            {hasActiveFilters && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-center"
                >
                    <button
                        onClick={onClearFilters}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-secondary hover:text-primary transition-colors border-b border-secondary/20 hover:border-primary/30"
                        aria-label="Clear all filters"
                    >
                        <X size={16} />
                        Clear all filters
                    </button>
                </motion.div>
            )}
        </div>
    );
};

ProjectFilter.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectedCategory: PropTypes.string.isRequired,
    onCategoryChange: PropTypes.func.isRequired,
    selectedTags: PropTypes.arrayOf(PropTypes.string).isRequired,
    onTagToggle: PropTypes.func.isRequired,
    availableTags: PropTypes.arrayOf(PropTypes.string).isRequired,
    searchQuery: PropTypes.string.isRequired,
    onSearchChange: PropTypes.func.isRequired,
    onClearFilters: PropTypes.func.isRequired
};

export default ProjectFilter;
