// import { useState } from "react";

const AddPostForm = (props) => {
    return (
        <section>
            <h2>Add Post</h2>
            <form>
             <label htmlFor="postTitle">Post Title </label>
                <input name = "postTitle" type ="text" id="postTitle" />
                <label htmlFor="postContent">Post Content </label>
                <input name = "postContent" type ="text" id="postContent" />

                <input type="submit" value="Save" />

            </form>
        </section>
    );
};

export default AddPostForm;
