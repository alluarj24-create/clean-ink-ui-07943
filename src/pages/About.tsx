export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article className="prose prose-lg max-w-none">
        <h1 className="text-5xl font-serif font-bold mb-8">About The Chronicle</h1>
        
        <div className="text-xl text-muted-foreground leading-relaxed mb-12">
          A personal publication exploring the intersection of technology, lifestyle, and personal growth.
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-serif font-semibold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            The Chronicle is a space dedicated to sharing insights, experiences, and knowledge across diverse topics 
            that matter in today's world. From cutting-edge web development practices to mindful living and wellness, 
            we believe in the power of continuous learning and balanced living.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-serif font-semibold mb-4">What We Cover</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border border-border rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Technology & Coding</h3>
              <p className="text-muted-foreground">
                Deep dives into web development, software engineering best practices, and emerging technologies 
                that are shaping the digital landscape.
              </p>
            </div>
            <div className="p-6 border border-border rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Lifestyle & Wellness</h3>
              <p className="text-muted-foreground">
                Practical advice on maintaining work-life balance, incorporating fitness and yoga into daily routines, 
                and cultivating mindful living practices.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-serif font-semibold mb-4">The Author</h2>
          <p className="text-lg leading-relaxed">
            Written by a developer and wellness enthusiast who believes that the best work comes from a balanced life. 
            With years of experience in software development and a passion for continuous learning, this blog serves 
            as both a knowledge repository and a reflection on the journey of growth.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-serif font-semibold mb-4">Get in Touch</h2>
          <p className="text-lg leading-relaxed">
            Have questions, suggestions, or just want to connect? Visit our{" "}
            <a href="/contact" className="text-accent hover:underline font-medium">
              contact page
            </a>{" "}
            to reach out. We'd love to hear from you.
          </p>
        </section>
      </article>
    </div>
  );
}
