import React from 'react';
import { useForm } from 'react-hook-form';

const AddItems = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        const image = data.Img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=fbe6e90ddde5d94b3ba07ce8b7c936cd`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const productInfo = { ...data, PhotoUrl: imgData?.data.url }

                    // save product information to the database
                    fetch('http://localhost:5000/addProduct', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(productInfo)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            reset()
                        })
                }
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="hero min-h-screen ">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card flex-shrink-0 w-[400px] max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Item Name</span>
                                    </label>
                                    <input type="text" placeholder="Item Name" className="input input-bordered"  {...register("name")} />
                                    {errors.name && <span className='text-[10px] text-red-500 text-start mt-2'>Item name is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Item Image</span>
                                    </label>
                                    <input type="file" className="file-input file-input-bordered w-full max-w-xs"  {...register("Img")} />
                                    {errors.Img && <span className='text-[10px] text-red-500 text-start mt-2'>Item Img is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Item Description</span>
                                    </label>
                                    <input type="text" placeholder="Item Description" className="input input-bordered"  {...register("description")} />
                                    {errors.description && <span className='text-[10px] text-red-500 text-start mt-2'>Item Description is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Item Price</span>
                                    </label>
                                    <input type="number" placeholder="Item Price" className="input input-bordered"  {...register("price")} />
                                    {errors.price && <span className='text-[10px] text-red-500 text-start mt-2'>Item Description is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Item Type</span>
                                    </label>
                                    <select className="select select-bordered w-full max-w-xs"{...register("Type")}>
                                        <option>Man</option>
                                        <option>Woman</option>
                                        <option>Smart</option>
                                    </select>
                                    {errors.Type && <span className='text-[10px] text-red-500 text-start mt-2'>Item type is required</span>}
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-outline">Add Items</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};
export default AddItems;