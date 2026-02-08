import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../../api.js';

const NewProject = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [creators, setCreators] = useState([]);
    const [tags, setTags] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCreators, setSelectedCreators] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [images, setImages] = useState([]);
    const navigate = useNavigate();

     useEffect(() => {
        api.get("creators/").then((res) => setCreators(res.data));
        api.get("tags/").then((res) => setTags(res.data));
        api.get("categories/").then((res) => setCategories(res.data));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);

        selectedCreators.forEach((id) => formData.append("creator_ids", id));
        selectedTags.forEach((id) => formData.append("tag_ids", id));
        selectedCategories.forEach((id) => formData.append("category_ids", id));

        images.forEach((img) =>{
            formData.append('images', img)
        })

        api
        .post("projects/", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        })
        .then(() => alert("Project uploaded successfully"))
        .catch((err) => console.error(err));
    };

    return (
        <section className='section'>
            <div className='container'>
                <h1 className='title has-text-grey-dark'>Create a New Project</h1>
                <form className='box' style={{ backgroundColor: 'transparent', border:'1px solid #ddd'}} onSubmit={handleSubmit}>
                    <div className='field'>
                        <label className='label has-text-grey-dark'>Title</label>
                        <div className='control'>
                            <input className='input' type='text' value={title} onChange={e => setTitle(e.target.value)} />
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label has-text-grey-dark'>Creator(s)</label>
                        <div className='control select is-multiple is-fullwidth'>
                            <select multiple className='' value={selectedCreators} onChange={e => setSelectedCreators(Array.from(e.target.selectedOptions, (opt) => opt.value))}>
                                {creators.map((c) => (
                                    <option key={c.id} value={c.id} className='is-size-6 px-2 pt-2 has-text-grey-dark'>{c.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label has-text-grey-dark'>Tags</label>
                        <div className='control select is-multiple is-fullwidth'>
                            <select multiple value={selectedTags} onChange={e => setSelectedTags(Array.from(e.target.selectedOptions, (opt) => opt.value))}>
                                {tags.map((t) => (
                                    <option key={t.id} value={t.id}>{t.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label has-text-grey-dark'>Categories</label>
                        <div className='control select is-multiple is-fullwidth'>
                            <select multiple value={selectedCategories} onChange={e => setSelectedCategories(Array.from(e.target.selectedOptions, (opt) => opt.value))}>
                                {categories.map((cat) => (
                                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label has-text-grey-dark'>Image(s)</label>
                        <div className='control file has-name is-fullwidth'>
                            <label className='file-label'>
                                <input className='file-input' type='file' accept='image/*' multiple onChange={e => setImages([...e.target.files])} />
                                <span className='file-cta has-background-grey-lighter mr-3'>
                                    <span className='file-label has-text-grey-dark'>Choose the images...</span>
                                </span>
                                <span className='has-text-grey-dark' style={{ display: 'flex', alignItems: 'center'}}>
                                    {images.length > 0 ? images.map(img => img.name).join(', ') : ' No Files Selected'}
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label has-text-grey-dark'>Description</label>
                        <div className='control'>
                            <textarea className='textarea' value={description} onChange={e => setDescription(e.target.value)}></textarea>
                        </div>
                    </div>
                    <button className='button cta-button is-fullwidth' type='submit'>Create</button>
                </form>
            </div>
        </section>
    );
};

export default NewProject;