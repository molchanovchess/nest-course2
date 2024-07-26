import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  private posts = [
    {
      id: 1,
      title: 'My First Post',
      datetime: 'July 01, 2021 11:17:36 AM',
      body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, quo!',
    },
    {
      id: 2,
      title: 'My 2nd Post',
      datetime: 'July 01, 2021 11:17:36 AM',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, cumque reprehenderit?',
    },
    {
      id: 3,
      title: 'My 3rd Post',
      datetime: 'July 01, 2021 11:17:36 AM',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, cumque reprehenderit?',
    },
    {
      id: 4,
      title: 'My 4th Post',
      datetime: 'July 01, 2021 11:17:36 AM',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, cumque reprehenderit?',
    },
  ];

  findAll() {
    return this.posts;
  }

  findOne(id: number) {
    const posts = this.posts.find((posts) => posts.id === id);

    return posts;
  }

  create(posts: { title: string; datetime: string; body: string }) {
    const postsByHighestId = [...this.posts].sort((a, b) => b.id - a.id);
    const newPosts = {
      id: postsByHighestId[0].id + 1,
      ...posts,
    };
    this.posts.push(newPosts);

    return newPosts;
  }

  update(
    id: number,
    updatedPost: { title?: string; datetime?: string; body?: string },
  ) {
    console.log(updatedPost.title)
    this.posts = this.posts.map((post) => {
      if (post.id === id) {
        return { ...post, ...updatedPost };
      }
      console.log(3, post)
      return post;
    });

    return this.findOne(id);
  }

  delete(id: number) {
    const removedGrocery = this.findOne(id);

    this.posts = this.posts.filter((post) => post.id !== id);

    return removedGrocery;
  }
}
