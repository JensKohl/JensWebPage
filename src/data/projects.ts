// ---------------------------------------------------------------------------
// DATA MODELING WITH TYPESCRIPT INTERFACES:
// Defining an interface serves as a contract for our data objects.
// It ensures that every project has required fields (title, link, image, etc.)
// while allowing optional properties using '?:' (like subtitle).
// ---------------------------------------------------------------------------
export interface Project {
	title: string;
	subtitle?: string; // Optional property
	link: string;
	image: string;
	date: string;
	desc: string;
}

// ---------------------------------------------------------------------------
// SEPARATION OF CONCERNS:
// Storing content as pure structured data (separate from UI components)
// makes it easier to maintain, localize, or fetch from a CMS/API later.
// ---------------------------------------------------------------------------
export const projects: Project[] = [
	{
		title: "Structural testing for LLM-based agents",
		subtitle:
			"First framework to allow testing agents on deeper technical level than acceptance tests",
		link: "TODO",
		image: "images/projects/AutomatedStructuralTestsPic.jpg",
		date: "2025-12-08",
		desc:
			"Main author of an IEEE Big Data 2025 main-track paper introducing an open-source framework for structural testing of LLM-based agents. I ideated the overall approach " +
			"and contributed parts of the framework, which combines OpenTelemetry-based tracing to capture agent trajectories, automated verification of agent behavior against execution traces, " +
			"and mocking of agent components—especially LLMs—to ensure reproducible tests. This enables software engineering best practices such as the test automation pyramid, regression testing, " +
			"and test-driven development for GenAI systems, improving test coverage, debugging speed, and development efficiency.",
	},
	{
		title: "Speeding up cloud incident root cause analyses",
		subtitle: "Building an LLM-based agent to automate root cause analyses",
		link: "https://aws.amazon.com/blogs/machine-learning/innovating-at-speed-bmws-generative-ai-solution-for-cloud-incident-analysis/",
		image: "images/projects/RCA_Agent-Architecture.png",
		date: "2025-03-05",
		desc:
			"As part of a joint BMW and AWS team, we designed and built an LLM-based agent to automate incident root-cause analysis across distributed cloud services. " +
			"Using Amazon Bedrock, the agent correlates logs, metrics, architecture, and control-plane events, reducing diagnosis time from hours to minutes" +
			"with ~85% accuracy in proof-of-concept tests. I ideated the solution and co-led its development. This solution benefits teams managing cloud environments " +
			"looking to streamline incident resolution",
	},
	/*
{
        title: 'Ticketron',
        subtitle: 'Speeding up the defect ticket workflow by detecting duplicates and automated routing',
        link: 'https://www.youtube.com/watch?v=ScTLkWMKfIs',
        image: '',
        date: '2024-12-06',
        desc: '', // TODO: description
},*/
	{
		title: "Generative AI toolkit",
		subtitle:
			"A framework for increasing the quality of LLM-based applications over their whole life cycle",
		link: "https://github.com/awslabs/generative-ai-toolkit",
		image: "images/projects/GenAIToolkitArchitecture.png",
		date: "2023-12-01",
		desc:
			"As part of a joint AWS and BMW team, I ideated and co-designed the Generative AI Toolkit, a framework that automates core workflows across the lifecycle " +
			"of LLM-based applications—configuration, testing, monitoring, and optimization. By reducing manual DevOps tasks, it improves quality and shortens release cycles " +
			"for production-grade generative AI systems. The toolkit is open-source and relevant for teams deploying LLMs at scale.",
	},
	{
		title: "Generative AI based cloud assistant",
		subtitle: "LLM-based agent assisting to optimize cloud accounts at scale",
		link: "https://youtu.be/1Lat8dP7Eq0?si=V6DHfae2EGjnYsGt&t=2458",
		image: "images/projects/GenAIBot-Architecture-reinvent2023.png",
		date: "2023-08-01",
		/*desc:  'As part of a joint AWS and BMW team, I ideated and co-led the development of one of the first LLM-based multi-agent systems to optimize cloud infrastructure for ' + 
                'cost, quality, and security. Built on Amazon Bedrock, it translates natural-language requests into actionable insights, identifies optimization opportunities, ' + 
                'and recommends cost-saving or efficiency improvements across multiple AWS accounts. The agent saved millions in cloud costs and is now extended and rolled out across BMW. ' +
                'The solution is highly relevant for DevOps teams focused on continuously optimizing cloud accounts at scale and hence was published frequently.'*/
		desc:
			"As part of a joint AWS and BMW team, I ideated and co-led the development of one of the first LLM-based multi-agent systems worldwide. The system optimizes cloud infrastructure " +
			"for cost, quality, and security. Built on Amazon Bedrock, it translates natural-language requests into actionable insights, identifies optimization opportunities, and recommends improvements" +
			"in cost, performance, or efficiency across multiple AWS accounts. The agent saved millions in cloud costs, has been widely published, and is now extended and rolled out across BMW." +
			"It is relevant for DevOps teams managing cloud infrastructure at scale and seeking continuous optimization.",
	},
	{
		title: "Teaching lecture Data Science and Artificial intelligence",
		subtitle: "Teaching master's degree course",
		link: "https://github.com/JensKohl/Lecture-Technical_Applications_Data_Management-Slides_and_Notebooks",
		image: "images/projects/Vorlesung-Übersicht.jpg",
		date: "2023",
		desc /*'Since 2020, I have been teaching a Master’s course in Data Science and Artificial Intelligence at Fresenius University of Applied Sciences in München. ' + 
                'The curriculum covers data analytics, supervised and unsupervised learning, deep learning with CNNs and transfer learning, large language models (LLMs), ' +
                'and LLM-based agents. The course includes practical exercises and notebooks that support hands-on learning. Through this work, I guide students in applying ' +
                'AI techniques to real-world problems, developing practical data science skills, and gaining experience with state-of-the-art AI tools.'*/:
			"Since 2020, I have been teaching a Master’s course in Data Science and Artificial Intelligence at Fresenius University of Applied Sciences in München. " +
			"The curriculum introduces students to data analytics, supervised and unsupervised learning, deep learning with CNNs and transfer learning, and large language models (LLMs) " +
			"including LLM-based agents. The course includes practical exercises and notebooks that support hands-on learning. I guide students in applying AI techniques to real-world problems, " +
			"developing practical data science skills, and gaining experience with state-of-the-art AI tools.",
	},
	{
		title: "Scaling end-2-end cloud governance",
		subtitle: "Automate and simplify cloud governance workflows",
		link: "https://youtu.be/nu69JLkc0G8?si=J4G4mUOVnV7qVtGq&t=2332",
		image: "images/projects/ScalingCloudGovernance-reinvent2023.png",
		date: "2023-12-01",
		desc:
			"As part of a joint BMW and AWS team, I ideated, co-led, and contributed to the development of an automated compliance framework enforcing internal standards and " +
			"regulatory requirements across hundreds of AWS accounts. Built on AWS Config, AWS Trusted Advisor, and custom rules, the solution centralizes findings, visualizes " +
			"compliance status via dashboards, and provides actionable recommendations. It reduces manual audits, improves governance visibility, accelerates engineering productivity, " +
			"and scales compliance enterprise-wide, demonstrating applied cloud automation and operational leadership relevant for DevOps and cloud engineering teams.",
	},
	{
		title: "Cloud migration",
		subtitle:
			"One of the first successful migrations of an automotive OEM to the cloud",
		link: "https://aws.amazon.com/de/blogs/migration-and-modernization/accelerating-to-the-cloud-bmw-connecteddrives-migration-to-aws-and-lessons-for-the-road-ahead/",
		image:
			"images/projects/bmw-connected-drive-app-feature-reading-1024x518.jpg",
		date: "2023-05-04",
		desc:
			"For 2 years, I led the team responsible for cloud architecture, architectural standards, and the migration initiative of BMW ConnectedDrive to AWS, covering over 1,300 microservices. " +
			"We established reference architectures, defined standards, and guided DevOps teams through a phased migration, enabling efficient, compliant, and secure service transitions. " +
			"The initiative improved reliability, scalability, and operational efficiency, accelerated service delivery, and created a repeatable framework for future cloud projects. " +
			"This work demonstrates applied cloud leadership, enterprise-scale execution, and measurable operational impact.",
	},
	{
		title: "Headunit in the cloud",
		subtitle:
			"Virtualize embedded Android control units on cloud compute instances",
		link: "https://aws.amazon.com/de/blogs/industries/how-bmw-uses-aws-to-scale-and-automate-sdv-with-virtual-ecus/",
		image: "images/projects/HeadunitInCloud-summitBerlin.png",
		date: "2023-05-04",
		desc:
			"Together with AWS and external partners, my team built a virtual ECU (vECU) platform on AWS, enabling fully end-to-end virtualization of embedded automotive Android devices and supporting " +
			"scalable cloud testing and CI/CD of vehicle software for upcoming infotainment systems across over 20 million vehicles. I led the responsible BMW team providing strategic guidance and " +
			"architectural oversight. This platform accelerates development cycles, improves developer productivity, enhances collaboration, and is particularly relevant for teams planning large-scale " +
			"cloud-based development and testing of complex embedded systems.",
	},
	{
		title: "Proactive Care",
		subtitle: "First end-2-end automotive diagnosis workflow at scale.",
		link: "https://www.youtube.com/results?search_query=AWS+re%3AInvent+2022+-+How+BMW%2C+Intuit+%26+Morningstar+are+transforming+with+AWS+%26+Athena",
		image: "images/projects/PaCC.png",
		date: "2022-11-31",
		desc:
			"I led the cross-functional prototyping team that developed what is, to the best of our knowledge, the first end-to-end automotive diagnosis workflow at scale. The workflow covers real-time " +
			"failure detection onboard embedded systems and offboard cloud backend, failure prevention and prediction via ML on highly imbalanced data, and direct customer contact across multiple channels. " +
			"Built fully serverless on AWS by BMW engineers, the PoC scaled from 1M vehicles to a full rollout of 23M vehicles as BMW ProActive Care. This initiative demonstrates applied AI, cloud architecture, " +
			"and operational leadership, and is highly relevant for teams building large-scale preventive maintenance solutions for automotive or IoT.",
	},
	{
		title: "Superbike World Championship Racing team",
		subtitle:
			"Embedded Software Developer of Superbike's real-time embedded control unit for data logging and telemetry",
		link: "",
		image: "images/projects/Superbike.jpg",
		date: "2005",
		desc:
			"As part of BMW's professional Superbike racing team, I designed and implemented core modules of the Superbike's data logger, an embedded control unit in C/C++ on RTEMS. " +
			"The system enabled real-time logging of 200+ sensor values at 1 kHz, storing up to 1 MB/sec over several hours, and supporting high-speed data upload via Ethernet and wireless broadcast. " +
			"The logger was actively used in the Superbike's testing and performance runs. I also developed software- and hardware-in-the-loop testing environments for the modules I implemented.",
	},
	{
		title: "Software BMW S85 Engine for BMW M5 (E60/E61)",
		subtitle: "Automotive Embedded Software Engineer",
		link: "",
		image: "images/projects/BMW_S85B50_Engine.jpg",
		date: "2004",
		desc:
			"I developed a code-signing tool for the BMW M5 engine control unit (ECU) in C/C++, ensuring secure software and data set integration. Additionally, I designed and implemented a " +
			"Hardware-in-the-Loop (HiL) test unit in C/C++ to validate the electronic throttle control system, enabling automated testing of long-term reliability under real-world stress conditions. " +
			"This approach improved testing efficiency, reduced validation time, and ensured the robustness of the system.",
	},
];
