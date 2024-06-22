import React from 'react';

const ProjectsPage = () => {
    const showcaseData = [
        { title: 'Project 1', description: 'This is project 1' },
        { title: 'Project 2', description: 'This is project 2' },
        { title: 'Project 3', description: 'This is project 3' },
    ];

    return (
        <div>
            <h1>Project Showcase</h1>
            {showcaseData.map((project, index) => (
                <div key={index}>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ProjectsPage;