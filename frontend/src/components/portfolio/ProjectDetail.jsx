import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ProjectDetail = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);


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

    useEffect(() => {
        if (project?.images?.length > 0) {
            setSelectedImage(project.images[0]);
        }
    }, [project]);


    if (loading) return <p>Loading...</p>;
    if (!project) return <p>Project not found</p>;
    const apiBase = import.meta.env.VITE_API_URL.replace('/api', '');
    const pageTitle = `${project.title} — Measured & Made`;
    const pageDescription =
    project.description?.length > 150
        ? project.description.slice(0, 150) + "…"
        : project.description || "A custom project by Measured & Made.";

    const canonicalUrl = `https://measured-and-made.com/project/${project.id}`;

        
    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <link rel="canonical" href={canonicalUrl} />

                {/* Open Graph */}
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={canonicalUrl} />
                <meta
                    property="og:image"
                    content={
                    selectedImage?.image?.startsWith("http")
                        ? selectedImage.image
                        : apiBase + selectedImage?.image
                    }
                />
            </Helmet>

            <div className="container mb-6">
                {selectedImage && (
                    <figure className="image is-3by2 mb-4">
                        <img
                            src={selectedImage.image.startsWith("http") ? selectedImage.image : apiBase + selectedImage.image}
                            alt={project.title}
                            style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderRadius: "6px"
                            }}
                        />
                    </figure>

                )}
                <div className="columns is-mobile is-multiline">
                    {project.images.map(img => (
                        <div
                        key={img.id}
                        className="column is-one-quarter"
                        onClick={() => setSelectedImage(img)}
                        style={{ cursor: "pointer" }}
                        >
                        <figure className="image is-1by1">
                            <img
                            src={img.image.startsWith("http") ? img.image : apiBase + img.image}
                            alt={project.title}
                            style={{
                                objectFit: "cover",
                                width: "100%",
                                height: "100%",
                                borderRadius: "4px",
                                border: selectedImage?.id === img.id ? "2px solid #555" : "2px solid transparent"
                            }}
                            />
                        </figure>
                        </div>
                    ))}
                </div>

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

                {/* CTA */}
                <div className="has-text-centered mt-6">
                    <a href="/contact" className="button cta-button is-medium">
                        Start Your Project
                    </a>
                </div>
            </div>
        </>
    );
};

export default ProjectDetail;
