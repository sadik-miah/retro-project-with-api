const loadAllPosts = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    const data = await res.json()
    const posts = (data.posts);
    displayData(posts);
}
const displayData = (posts) => {
    const postContainer = document.getElementById('posts-container');
    posts.forEach(post => {
        // console.log(post);
        const postDiv = document.createElement('div');
        postDiv.classList = `flex gap-7 bg-gray-200 rounded-2xl p-8`
        postDiv.innerHTML = `
                        <div>
                            <img class="w-[72px] h-[72px] rounded-2xl" src="${post.image}" alt="">
                        </div>
                        <div class="flex flex-col gap-2">
                            <div class="flex text-base font-semibold gap-5">
                                <p># <span>${post.category}</span></p>
                                <p>Author : <span>${post.author.name}</span></p>
                            </div>
                            <h1 class="text-xl font-semibold">${post.title}</h1>
                            <p class="border-b-2 border-dashed pb-5 text-[#12132D99]">${post.description} i am a student. I am softWare devoloper</p>

                            <div class="flex justify-between items-center">
                                <div class="flex justify-between items-center py-2 flex-1">
                                    <div class="flex items-center gap-3">
                                        <p><i class="fa-regular fa-file-lines text-2xl"></i></p>
                                        <p>${post.comment_count}</p>
                                    </div>
                                    <div class="flex items-center gap-3">
                                        <p><i class="fa-regular fa-eye text-2xl"></i></i></p>
                                        <p>${post.view_count}</p>
                                    </div>
                                    <div class="flex items-center gap-3">
                                        <p><i class="fa-regular fa-clock text-2xl"></i></i></p>
                                        <p>${post.posted_time} min</p>
                                    </div>
                                </div>
                                <div class="flex-1 flex justify-end">
                                    <button onclick="showReadData('${post.category}')" class="bg-green-500 py-1 px-2 rounded-full"><i
                                            class="fa-solid fa-envelope text-2xl"></i></button>
                                </div>
                            </div>
                        </div>
`
        postContainer.appendChild(postDiv);
    })
}
// loading

const showReadData = async (category) => {
    // console.log(post);
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${category}`)
    const data = await res.json()
    const posts = data.posts;
    displayReadShowData(posts);
}
const displayReadShowData = (posts) => {
    // console.log(posts);
    const readAllDiv = document.getElementById('read-all-div');
    posts.forEach(post => {
        console.log(post);
        const readDiv = document.createElement('div');
        readDiv.classList = `flex justify-between items-center bg-white p-5 rounded-xl my-7`;
        readDiv.innerHTML = `
                                <div>
                                    <p class="text-[#12132D]">${post.title}</p>
                                </div>
                                <div class="flex items-center gap-3">
                                    <p><i class="fa-regular fa-eye text-2xl"></i></i></p>
                                    <p>${post.view_count}</p>
                                </div>
        `;
        readAllDiv.appendChild(readDiv);
    })
}

// latest posts
const loadingLatestPosts = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`)
    const data = await res.json()
    const posts = data;
    displayLoadingPostData(posts);
}
const displayLoadingPostData = (posts) => {
    const latestCardContainer = document.getElementById('latest-card-container');
    posts.forEach(post => {
        console.log(post);
        const latestPostCard = document.createElement('div');
        latestPostCard.classList = `border-2 border-gray-400 rounded-md p-4`;
        latestPostCard.innerHTML = `
                        <div>
                        <div class="flex justify-center">
                            <img class="rounded-lg" src="${post.cover_image}" alt="">
                        </div>
                        <div class="flex flex-col gap-2 my-4">
                            <div class="flex items-center gap-3">
                                <p><i class="fa-solid fa-calendar-week text-xl"></i></p>
                                <p class="text-base font-semibold">${post.author?.posted_date || 'No publish date'}</p>
                            </div>
                            <h1 class="text-lg font-semibold">${post.title}</h1>
                            <p>${post.description}</p>
                        </div>

                        <div class="flex gap-8 items-center">
                            <div>
                                <img src="images/Ellipse 1.png" alt="">
                            </div>
                            <div>
                                <h1 class="text-xl font-semibold">${post.author.name}</h1>
                                <p>${post.author?.designation || 'Unknown'}</p>
                            </div>
                        </div>

                    </div>
        `;
        latestCardContainer.appendChild(latestPostCard);
    })
}

loadingLatestPosts();


loadAllPosts();