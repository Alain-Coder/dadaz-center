export interface BlogPost {
  id: string
  title: string
  content: string
  excerpt: string
  author: {
    name: string
    avatar: string
    bio?: string
  }
  category: string
  tags: string[]
  image: string
  publishedAt: Date
  updatedAt: Date
  likes: number
  commentsCount: number
  readTime: number
  featured: boolean
}

export interface Comment {
  id: string
  postId: string
  author: {
    name: string
    email: string
    avatar?: string
  }
  content: string
  createdAt: Date
  likes: number
  replies?: Comment[]
  parentId?: string
}

export interface Like {
  id: string
  postId: string
  userId: string
  userEmail: string
  createdAt: Date
}