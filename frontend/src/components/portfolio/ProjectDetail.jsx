import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    const apiUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const fetchProject = async () => {
            const response = await fetch(`${apiUrl}/projects/${id}/`);
            const data = await response.json();
            setProject(data);
            setLoading(false);
        };
        fetchProject();
    }, [id, apiUrl]);

    if (loading) return <p>Loading...</p>;
    if (!project) return <p>Project not found</p>;

    // Hero image
    const heroImage = project.images?.[0]?.image?.startsWith("http")
        ? project.images[0].image
        : `${apiUrl}${project.images?.[0]?.image}`;

    return (
        <div className="container mb-6">
            {/* HERO IMAGE */}
            <figure className="has-text-centered">
                <img
                    src={heroImage}
                    alt={project.title}
                    style={{ width: "100%", height: "auto" }}
                />
            </figure>

            {/* TITLE + CATEGORIES */}
            <h1 className="title is-2 has-text-centered has-text-grey-dark">{project.title}</h1>

            <p className="has-text-centered is-size-6 has-text-grey mb-4">
                {project.categories?.map((cat, i) => (
                    <span key={cat.id}>
                        {cat.name}
                        {i < project.categories.length - 1 && ", "}
                    </span>
                ))}
            </p>

            {/* DESCRIPTION */}
            <div className="content is-medium has-text-grey-dark mb-6">
                <p style={{ whiteSpace: "pre-wrap" }}>{project.description}</p>
            </div>

            {/* TAGS */}
            <div className="tags mb-6">
                {project.tags?.map((tag) => (
                    <span key={tag.id} className="tag is-light is-info">
                        {tag.name}
                    </span>
                ))}
            </div>

            {/* GALLERY */}
            {project.images?.length > 1 && (
                <>
                    <h2 className="title is-4 mt-6">Gallery</h2>
                    <div className="columns is-multiline">
                        {project.images.slice(1).map((img, i) => {
                            const url = img.image.startsWith("http")
                                ? img.image
                                : `${apiUrl}${img.image}`;
                            return (
                                <div className="column is-4" key={i}>
                                    <figure className="image is-4by3">
                                        <img
                                            src={url}
                                            alt={`Gallery ${i}`}
                                            style={{ objectFit: "cover" }}
                                        />
                                    </figure>
                                </div>
                            );
                        })}
                    </div>
                </>
            )}

            {/* CTA */}
            <div className="has-text-centered mt-6">
                <a href="/contact" className="button cta-button is-medium">
                    Start Your Project
                </a>
            </div>
        </div>
    );
};

export default ProjectDetail;
