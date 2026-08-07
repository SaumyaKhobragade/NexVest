function Team() {
    return (
        <>
            <div className="container">
                <div className="row p-3 mt-5 border-top">
                    <h1 className="text-center ">People</h1>
                </div>

                <div
                    className="row p-3 text-muted"
                    style={{ lineHeight: "1.8", fontSize: "1.2em" }}
                >
                    <div className="col-6 p-3 text-center">
                        <img
                            src="assets/SaumyaKhobragade.png"
                            style={{ borderRadius: "100%", width: "50%" }}
                        />
                        <h4 className="mt-5">Saumya Khobragade</h4>
                        <h6>Developer</h6>
                    </div>
                    <div className="col-6 p-3">
                        <p>
                            Hi, I'm <strong>Saumya Khobragade</strong>, a Computer Science student and
                            full-stack developer passionate about building modern, scalable web
                            applications. I enjoy transforming ideas into polished products using
                            technologies like React, Node.js, Express, MongoDB, Java, and Spring Boot,
                            while continuously exploring AI and machine learning.
                        </p>

                        <p>
                            Alongside full-stack development, I actively practice Data Structures &
                            Algorithms and competitive programming to strengthen my problem-solving
                            skills. I believe in writing clean, maintainable code and building projects
                            that solve real-world problems rather than just replicating existing ones.
                        </p>

                        <p>
                            Currently, I'm focused on mastering React, Next.js, and modern web
                            development while building <strong>NexVest</strong>, a premium stock trading
                            platform inspired by industry-leading brokerage applications.
                        </p>

                        <p>
                            When I'm not coding, you'll probably find me exploring new technologies,
                            participating in hackathons, solving coding challenges, or learning
                            something that pushes me to become a better software engineer.
                        </p>

                        <p>
                            Connect with me on{" "}
                            <a
                                href="https://www.linkedin.com/in/saumya-khobragade"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </a>{" "}
                            /{" "}
                            <a
                                href="https://github.com/SaumyaKhobragade"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>{" "}
                            /{" "}
                            <a href="mailto:khobragadesaumya@gmail.com">
                                Email
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Team;
