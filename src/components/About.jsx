const About = ({ drone6 }) => {
  return (
    <section id="about">
      <div className="about__droneImage">
        <img src={drone6} alt="" />
      </div>
      <div className="about__content">
        <h2>ABOUT US</h2>
        <hr />
        <p>
          Welcome to our dronoticz, where innovation and technology converge to
          shape the future. We revolutionize industries and improve lives
          worldwide through our passion for pushing the boundaries of what
          robots can do. With expertise in Al, computer vision, mechanical
          engineering, and automation, we lead the way in the robotics
          revolution. Our brilliant team creates intelligent machines that
          seamlessly integrate into daily life, enhancing productivity, safety,
          and efficiency.Join us on this exciting journey as we unlock new
          frontiers, solve complex challenges, and shape a future where
          intelligent machines work hand-in-hand with humans. Discover the power
          of robotics and be part of the revolution.
        </p>
      </div>
    </section>
  );
};

export default About;
