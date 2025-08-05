import { BlogPost } from '@/types/blog'

export const sampleBlogPosts: Omit<BlogPost, 'id'>[] = [
  {
    title: "The Benefits of Chess Education for Young Minds",
    content: `
      <p>Chess is more than just a game—it's a powerful educational tool that can transform how children think, learn, and approach problems. At DADAZ Center, we've witnessed firsthand the incredible impact that chess education can have on young minds.</p>
      
      <h2>Cognitive Development</h2>
      <p>Research has consistently shown that chess education enhances cognitive abilities in children. When students learn chess, they develop:</p>
      <ul>
        <li><strong>Critical thinking skills:</strong> Chess requires players to analyze positions, evaluate options, and make strategic decisions.</li>
        <li><strong>Pattern recognition:</strong> Students learn to identify recurring themes and structures on the chessboard.</li>
        <li><strong>Memory improvement:</strong> Regular chess practice strengthens both short-term and long-term memory.</li>
        <li><strong>Concentration:</strong> Chess demands sustained attention and focus, skills that transfer to academic work.</li>
      </ul>
      
      <h2>Academic Performance</h2>
      <p>Studies have shown that students who participate in chess programs often see improvements in their academic performance, particularly in mathematics and reading comprehension. The logical thinking required in chess translates directly to problem-solving in other subjects.</p>
      
      <h2>Social and Emotional Benefits</h2>
      <p>Beyond cognitive benefits, chess education also supports social and emotional development:</p>
      <ul>
        <li>Patience and perseverance</li>
        <li>Sportsmanship and respect for opponents</li>
        <li>Confidence building through achievement</li>
        <li>Emotional regulation under pressure</li>
      </ul>
      
      <p>At DADAZ Center, we're committed to providing high-quality chess education that nurtures these essential life skills in our students.</p>
    `,
    excerpt: "Discover how chess education can enhance cognitive development, improve academic performance, and build essential life skills in young learners.",
    author: {
      name: "Susan Namangale",
      avatar: "/assets/images/placeholder.svg",
      bio: "Founder & Managing Director of DADAZ Center, passionate about educational excellence."
    },
    category: "Chess",
    tags: ["Chess", "Education", "Cognitive Development", "Children"],
    image: "/assets/images/placeholder.svg",
    publishedAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
    likes: 24,
    commentsCount: 8,
    readTime: 5,
    featured: true
  },
  {
    title: "Music Education: Building Creativity and Discipline",
    content: `
      <p>Music education is a cornerstone of holistic child development. At DADAZ Center, our music programs are designed to nurture creativity while building discipline and focus.</p>
      
      <h2>The Power of Music</h2>
      <p>Music education offers unique benefits that extend far beyond learning to play an instrument:</p>
      <ul>
        <li>Enhanced mathematical skills through rhythm and timing</li>
        <li>Improved language development and communication</li>
        <li>Emotional expression and regulation</li>
        <li>Cultural awareness and appreciation</li>
      </ul>
      
      <h2>Our Music Programs</h2>
      <p>We offer comprehensive music education including:</p>
      <ul>
        <li><strong>Instrumental Training:</strong> Guitar, Piano, Drums, and more</li>
        <li><strong>Music Theory:</strong> Understanding the fundamentals of music</li>
        <li><strong>Vocal Coaching:</strong> Developing singing techniques and performance skills</li>
        <li><strong>Ensemble Playing:</strong> Learning to collaborate and perform with others</li>
      </ul>
      
      <p>Our experienced instructors create a supportive environment where students can explore their musical interests and develop their talents.</p>
    `,
    excerpt: "Explore how music education builds creativity, discipline, and essential life skills while fostering a lifelong love of music.",
    author: {
      name: "Edwin Chitseko",
      avatar: "/assets/images/placeholder.svg",
      bio: "Professional music educator with over 10 years of experience."
    },
    category: "Music",
    tags: ["Music", "Education", "Creativity", "Instruments"],
    image: "/assets/images/placeholder.svg",
    publishedAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10'),
    likes: 18,
    commentsCount: 5,
    readTime: 4,
    featured: false
  },
  {
    title: "Digital Literacy in the Modern Age",
    content: `
      <p>In today's digital world, computer literacy is no longer optional—it's essential. Our computer education programs prepare students for the digital future.</p>
      
      <h2>Essential Digital Skills</h2>
      <p>Our computer programs cover:</p>
      <ul>
        <li>Basic computer operations and digital citizenship</li>
        <li>Programming fundamentals with Scratch and Python</li>
        <li>Graphic design and multimedia creation</li>
        <li>Internet safety and digital ethics</li>
      </ul>
      
      <h2>Preparing for the Future</h2>
      <p>Technology skills are increasingly important in all career paths. By starting early, we help students develop confidence with technology and prepare them for future opportunities.</p>
    `,
    excerpt: "Learn about the importance of digital literacy and how our computer programs prepare students for the digital future.",
    author: {
      name: "Rafik Namangale",
      avatar: "/assets/images/placeholder.svg",
      bio: "Chief Operations Officer and technology education specialist."
    },
    category: "Computer",
    tags: ["Technology", "Programming", "Digital Literacy", "Future Skills"],
    image: "/assets/images/placeholder.svg",
    publishedAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-05'),
    likes: 31,
    commentsCount: 12,
    readTime: 6,
    featured: true
  },
  {
    title: "Art Education: Fostering Creativity and Self-Expression",
    content: `
      <p>Art education plays a crucial role in developing creativity, self-expression, and visual literacy. Our art programs provide students with the tools and techniques to explore their artistic potential.</p>
      
      <h2>Benefits of Art Education</h2>
      <p>Art education offers numerous benefits:</p>
      <ul>
        <li>Enhanced creativity and imagination</li>
        <li>Improved fine motor skills and hand-eye coordination</li>
        <li>Visual-spatial intelligence development</li>
        <li>Emotional expression and stress relief</li>
        <li>Cultural awareness and appreciation</li>
      </ul>
      
      <h2>Our Art Programs</h2>
      <p>We offer diverse art education opportunities:</p>
      <ul>
        <li>Drawing and painting techniques</li>
        <li>Sculpture and 3D art</li>
        <li>Digital art and design</li>
        <li>Art history and appreciation</li>
      </ul>
      
      <p>Our goal is to help every student discover their unique artistic voice and develop the confidence to express themselves creatively.</p>
    `,
    excerpt: "Discover how art education fosters creativity, self-expression, and essential visual literacy skills in young learners.",
    author: {
      name: "Susan Namangale",
      avatar: "/assets/images/placeholder.svg"
    },
    category: "Art",
    tags: ["Art", "Creativity", "Self-Expression", "Visual Arts"],
    image: "/assets/images/placeholder.svg",
    publishedAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
    likes: 15,
    commentsCount: 6,
    readTime: 4,
    featured: false
  }
]