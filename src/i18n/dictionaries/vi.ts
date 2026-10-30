import type { TranslationDictionary } from "../types";

export const vi: TranslationDictionary = {
  nav: {
    home: "Trang chủ",
    about: "Giới thiệu",
    skills: "Kỹ năng",
    projects: "Dự án",
    experience: "Kinh nghiệm",
    contact: "Liên hệ",
  },
  hero: {
    status: "Sẵn sàng đón nhận cơ hội mới",
    greeting: "Xin chào, tôi là",
    name: "Lâm Bảo",
    role: "Kỹ sư phần mềm & Lập trình viên Full-Stack",
    bio: "Xây dựng các sản phẩm số mượt mà, hiệu năng cao và giàu tính trải nghiệm với Next.js, TypeScript và kiến trúc frontend hiện đại.",
    stackLabel: "Stack //",
    scrollCue: "CUỘN XUỐNG ĐỂ KHÁM PHÁ",
    skipIntro: "Bỏ qua intro ↓",
    buffering: "Đang tải",
    scrollProgress: "Cuộn chuột để điều khiển hiệu ứng 3D",
    chapters: {
      setup: "01 Bắt đầu",
      frontend: "02 Frontend",
      backend: "03 Backend",
      connect: "04 Kết nối",
    },
    chapter2: {
      badge: "02 / Kiến trúc Frontend • Độ chuẩn xác Pha lê",
      title1: "Điêu khắc giao diện với",
      titleHighlight: "Độ sắc nét Pha lê",
      desc: "Xây dựng giao diện web phản hồi nhanh với kiến trúc component, quản lý state và Next.js SSR. Tập trung vào cấu trúc UI, khả năng bảo trì và trải nghiệm người dùng mượt mà.",
      archTitle: "Kiến trúc Pha lê",
      archDesc: "Cấu trúc Component",
      ssrTitle: "Next.js SSR",
      ssrDesc: "Hydration & SEO tối ưu",
      stateTitle: "Quản lý State",
      stateDesc: "Luồng dữ liệu đồng bộ",
      uxTitle: "Trải nghiệm 60 FPS",
      uxDesc: "Chuyển động mượt mà",
    },
    chapter3: {
      badge: "03 / Kỹ thuật Backend • Trọng tâm Đô thị",
      title1: "Vận hành thành phố cùng",
      titleHighlight: "Backend Vững chắc",
      desc: "Thiết kế REST API và business logic, thiết lập xác thực & phân quyền, xử lý giao dịch và tính nhất quán của dữ liệu, xây dựng kiến trúc dễ bảo trì với tối ưu hóa cơ sở dữ liệu và tự động hóa triển khai.",
      apiTitle: "REST APIs & Logic",
      apiDesc: "Thiết kế REST API chuẩn mực, xử lý nghiệp vụ, xác thực và phân quyền.",
      dbTitle: "Cơ sở dữ liệu & Nhất quán",
      dbDesc: "Xử lý transaction, đảm bảo tính nhất quán dữ liệu ACID và tối ưu truy vấn.",
      infraTitle: "Hạ tầng Đô thị số",
      infraDesc: "Xây dựng kiến trúc bền vững, quy trình đám mây và tự động hóa triển khai.",
    },
    chapter4: {
      badge: "04 / Kết nối • Cùng tạo nên điều đặc biệt",
      title1: "Sẵn sàng tạo nên những sản phẩm",
      titleHighlight: "Đột phá?",
      desc: "Khám phá bộ kỹ năng kỹ thuật, các dự án thực tế và kinh nghiệm của tôi bên dưới.",
      ctaJourney: "Về hành trình của tôi",
      ctaSkills: "Kỹ năng chuyên môn",
      ctaContact: "Bắt đầu trò chuyện",
      continueScroll: "Tiếp tục cuộn xuống để khám phá",
    },
  },
  about: {
    badge: "GIỚI THIỆU",
    headline: {
      part1: "Xây dựng phần mềm với ",
      highlight1: "tư duy kỹ thuật",
      part2: " và định hướng ",
      highlight2: "giải quyết vấn đề.",
    },
    description:
      "Tôi là sinh viên Kỹ thuật phần mềm tại HUTECH, định hướng phát triển ứng dụng web Full-stack với trọng tâm là Backend Engineering. Tôi hướng đến việc chuyển hóa các yêu cầu thực tế thành những giải pháp phần mềm có cấu trúc rõ ràng, dễ bảo trì và đáp ứng đúng nhu cầu sử dụng.",
    philosophy: {
      badge: "NGUYÊN TẮC CỐT LÕI",
      title: "Triết lý phát triển",
      description:
        "Tôi không chỉ quan tâm đến việc tính năng hoạt động, mà còn chú trọng cách giải pháp được tổ chức, tính đúng đắn của dữ liệu và khả năng phát triển lâu dài của hệ thống.",
      principles: [
        {
          title: "Đơn giản và dễ bảo trì",
          description:
            "Ưu tiên giải pháp rõ ràng, hạn chế sự phức tạp không cần thiết và thuận tiện cho việc thay đổi.",
        },
        {
          title: "Đúng đắn về nghiệp vụ và dữ liệu",
          description:
            "Chú trọng tính hợp lệ của dữ liệu và bảo đảm các quy tắc nghiệp vụ được thực thi nhất quán.",
        },
        {
          title: "Cấu trúc trước sự chắp vá",
          description:
            "Quan tâm đến việc phân tách trách nhiệm và tổ chức mã nguồn thay vì chỉ bổ sung tính năng để đáp ứng yêu cầu trước mắt.",
        },
      ],
    },
    mindset: {
      badge: "ĐẶC ĐIỂM CHUYÊN MÔN",
      title: "Tư duy kỹ thuật nổi bật",
      cards: [
        {
          number: "01",
          title: "Problem-oriented",
          description:
            "Bắt đầu từ vấn đề và yêu cầu thực tế để xác định hướng giải quyết phù hợp.",
        },
        {
          number: "02",
          title: "Structured Thinking",
          description:
            "Phân tích vấn đề có hệ thống, chú trọng phân tách trách nhiệm và tổ chức giải pháp rõ ràng.",
        },
        {
          number: "03",
          title: "Continuous Improvement",
          description:
            "Liên tục cải thiện chất lượng giải pháp thông qua thực hành, đánh giá và điều chỉnh.",
        },
      ],
    },
  },
  skills: {
    badge: "HỆ SINH THÁI KỸ THUẬT",
    title: "Năng lực Kỹ thuật & Thực hành Giải pháp",
    subtitle: "Kết hợp giữa hiểu biết công nghệ nền tảng và năng lực giải quyết các bài toán kỹ thuật thực tế.",
    expertise: {
      badge: "TECHNICAL EXPERTISE",
      title: "Chuyên môn Công nghệ & Nền tảng",
      subtitle: "Các công nghệ, framework, công cụ và môi trường được sử dụng trong quá trình phát triển sản phẩm.",
    },
    solutions: {
      badge: "PROBLEMS & SOLUTIONS",
      title: "Thực hành Giải quyết Bài toán",
      subtitle: "Kinh nghiệm tiếp cận và xử lý các bài toán kỹ thuật, mô hình thiết kế và giao thức truyền thông.",
      problemLabel: "Bài toán (Problem)",
      approachLabel: "Hướng tiếp cận (Approach)",
      evidenceLabel: "Minh chứng (Evidence)",
      patternsTitle: "Mô hình & Kiến trúc (Patterns)",
      patternsSubtitle: "Áp dụng cấu trúc phần mềm và thiết kế dữ liệu để tối ưu tính mở rộng và bảo trì.",
      commTitle: "Giao thức truyền thông (Communication Protocols)",
      commSubtitle: "Thiết kế và chuẩn hóa các luồng trao đổi dữ liệu qua mạng.",
    },
  },
  projects: {
    badge: "HỒ SƠ NĂNG LỰC KỸ THUẬT",
    title: "Dự Án Kỹ Thuật Tiêu Biểu",
    subtitle:
      "Nghiên cứu chuyên sâu về giải quyết bài toán thực tế, mô hình hóa quan hệ dữ liệu, kiểm soát đồng thời, khóa phân tán và kiến trúc hệ thống production.",
    viewProject: "Xem trực tiếp",
    sourceCode: "Mã nguồn",
    exploreCaseStudy: "Xem Chi Tiết Kỹ Thuật",
    closeCaseStudy: "Đóng Chi Tiết",
    allCategories: "Tất cả lĩnh vực",
    educationCategory: "Giáo dục & Lưu trú",
    ecommerceCategory: "Thương mại Điện tử",
    enterpriseCategory: "Nền tảng Doanh nghiệp",
    roleLabel: "Vai trò",
    statusLabel: "Trạng thái",
    highlightsLabel: "Điểm sáng Kỹ thuật Cốt lõi",
    focusLabel: "Trọng tâm Kỹ thuật",
    stackLabel: "Công nghệ Chủ đạo",
    filterLabel: "Lọc theo lĩnh vực",
    privateRepo: "Mã nguồn Doanh nghiệp Nội bộ",
    featuredBadge: "Nghiên cứu Kỹ thuật Tiêu biểu",
    prevProject: "Dự án Trước",
    nextProject: "Dự án Kế tiếp",
    tabs: {
      overview: "Tổng quan",
      capabilities: "Chức năng Chính",
      challenges: "Thách thức Kỹ thuật",
      architecture: "Kiến trúc & Luồng dữ liệu",
      techStack: "Công nghệ",
      contribution: "Vai trò & Đóng góp",
      outcomes: "Kết quả & Minh chứng",
    },
    challengeLabels: {
      problem: "Vấn đề Kỹ thuật",
      approach: "Hướng giải quyết Kỹ thuật",
      tradeoffs: "Đánh đổi Kỹ thuật & Biện luận",
      benefits: "Lợi ích Đạt được",
      complexities: "Độ phức tạp Phát sinh",
      rationale: "Lý do Lựa chọn",
    },
    architectureLabels: {
      systemOverview: "Kiến trúc Tổng quan & Phân tầng Thành phần",
      workflowTitle: "Luồng Dữ liệu Vận hành",
      statusImplemented: "Đã hoàn thành",
      statusExternal: "Dịch vụ Bên thứ ba",
      statusPlanned: "Dự kiến triển khai",
    },
    contributionLabels: {
      features: "Chức năng Trực tiếp Phát triển",
      architecture: "Quyết định Kiến trúc & Thiết kế",
      devops: "Tích hợp, Kiểm thử & Vận hành",
    },
    outcomesLabels: {
      status: "Tình trạng Nghiệm thu & Bàn giao",
      points: "Kết quả Kỹ thuật Được Xác thực",
      confidentiality: "Lưu ý Bảo mật & Toàn vẹn Dữ liệu",
    },
  },
  experience: {
    badge: "SỰ NGHIỆP & HỌC VẤN",
    title: "Kinh nghiệm & Học vấn",
    subtitle:
      "Kinh nghiệm phát triển phần mềm thực tế kết hợp nền tảng đào tạo kỹ thuật phần mềm bài bản.",
    workTitle: "Kinh nghiệm làm việc",
    workSubtitle: "Kinh nghiệm thực tiễn xây dựng hệ thống phần mềm trong môi trường công nghiệp.",
    eduTitle: "Học vấn",
    eduSubtitle: "Nền tảng kiến thức học thuật chuyên ngành kỹ thuật phần mềm và khoa học máy tính.",
    employmentTypeLabel: "Hình thức làm việc",
    durationLabel: "Thời gian",
    projectLabel: "Dự án",
    responsibilitiesLabel: "Trách nhiệm & Đóng góp Kỹ thuật",
    techStackLabel: "Công nghệ sử dụng",
    degreeLabel: "Bằng cấp",
    majorLabel: "Chuyên ngành",
    gpaLabel: "Điểm trung bình (GPA)",
    classificationLabel: "Xếp loại tốt nghiệp",
    statusLabel: "Trạng thái",
    periodLabel: "Thời gian học",
    temporaryCertNotice: "Đã nhận bằng tốt nghiệp tạm thời",
  },
  career: {
    badge: "ĐỊNH HƯỚNG PHÁT TRIỂN",
    title: "Định hướng & Lộ trình nghề nghiệp",
    subtitle:
      "Phát triển chuyên môn theo hai hướng DevOps Engineering và Software Architecture dựa trên nền tảng Backend Engineering vững chắc.",
    direction: {
      badge: "ĐỊNH HƯỚNG NGHỀ NGHIỆP",
      title: "Định hướng phát triển chuyên môn",
      description:
        "Tôi định hướng phát triển chuyên môn theo hai hướng DevOps Engineering và Software Architecture, dựa trên nền tảng Backend Engineering. Mục tiêu của tôi là hiểu sâu hơn về toàn bộ vòng đời của một hệ thống phần mềm, từ thiết kế ứng dụng và dữ liệu đến triển khai, vận hành và cải tiến hệ thống.",
      foundationBadge: "NỀN TẢNG KỸ THUẬT DÙNG CHUNG",
      foundationTitle: "Nền tảng Backend Engineering",
      foundationDesc:
        "Gốc rễ vững chắc kết nối tư duy hệ thống, năng lực giải quyết vấn đề và kỹ năng phân tích trade-off.",
      pillars: {
        backend: "Backend Engineering",
        systems: "Systems Thinking",
        problemSolving: "Problem Solving",
        tradeoffs: "Trade-off Analysis",
      },
      lifecycleTitle: "Vòng đời toàn diện của hệ thống phần mềm",
      lifecycle: {
        step1: "Thiết kế ứng dụng & Dữ liệu",
        step2: "Triển khai & Vận hành",
        step3: "Cải tiến liên tục",
      },
    },
    mindset: {
      badge: "TƯ DUY KỸ THUẬT",
      title: "Tư duy giải quyết vấn đề thực tế",
      description:
        "Tôi tiếp cận kỹ thuật theo hướng giải quyết vấn đề trước khi lựa chọn công nghệ. Tôi chú trọng phân tích nguyên nhân gốc, hiểu các ràng buộc của hệ thống và cân bằng giữa hiệu năng, tính nhất quán, độ tin cậy, khả năng mở rộng, chi phí và độ phức tạp. Tôi hướng đến những giải pháp có cơ sở kỹ thuật, dễ bảo trì và phù hợp với nhu cầu thực tế.",
      tradeoffsTitle: "6 Yếu tố cân bằng kỹ thuật",
      tradeoffsSubtitle: "Phân tích và tối ưu hóa trước khi đưa ra quyết định công nghệ",
      dimensions: [
        {
          name: "Hiệu năng",
          label: "Performance",
          desc: "Tối ưu độ trễ, thời gian phản hồi và thông lượng hệ thống.",
        },
        {
          name: "Tính nhất quán",
          label: "Consistency",
          desc: "Bảo đảm tính đúng đắn và toàn vẹn của dữ liệu trong mọi kịch bản.",
        },
        {
          name: "Độ tin cậy",
          label: "Reliability",
          desc: "Chống chịu lỗi, khả năng phục hồi nhanh và tính sẵn sàng cao.",
        },
        {
          name: "Khả năng mở rộng",
          label: "Scalability",
          desc: "Đáp ứng tăng trưởng tải lượng theo chiều ngang lẫn chiều dọc linh hoạt.",
        },
        {
          name: "Chi phí",
          label: "Cost Efficiency",
          desc: "Tối ưu hóa chi phí hạ tầng máy chủ, băng thông và vận hành.",
        },
        {
          name: "Độ phức tạp",
          label: "Complexity Control",
          desc: "Kiểm soát độ phức tạp mã nguồn, giữ hệ thống tinh giản và dễ bảo trì.",
        },
      ],
    },
    focus: {
      badge: "TRỌNG TÂM PHÁT TRIỂN",
      title: "Hai hướng chuyên môn song hành",
      subtitle:
        "Hai hướng phát triển bổ trợ chặt chẽ, tạo sự liền mạch từ kiến trúc mã nguồn đến hạ tầng thực thi.",
      devops: {
        badge: "VẬN HÀNH & ĐỘ TIN CẬY HẠ TẦNG",
        title: "DevOps Engineering",
        description:
          "Tập trung phát triển năng lực tự động hóa quy trình build và deployment, quản lý hạ tầng, thiết lập CI/CD, giám sát hệ thống và nâng cao độ tin cậy trong quá trình vận hành phần mềm.",
        keyAreas: [
          "Tự động hóa build & deployment",
          "Quản lý hạ tầng (Infrastructure)",
          "Thiết lập & tối ưu pipeline CI/CD",
          "Giám sát hệ thống (Monitoring & Logging)",
          "Độ tin cậy vận hành (Site Reliability)",
        ],
      },
      architecture: {
        badge: "THIẾT KẾ & TỔ CHỨC CẤU TRÚC",
        title: "Software Architecture",
        description:
          "Tập trung nâng cao năng lực thiết kế hệ thống, tổ chức cấu trúc phần mềm, quản lý dữ liệu và tính nhất quán, đánh giá trade-off và xây dựng giải pháp có khả năng bảo trì, mở rộng theo nhu cầu phát triển.",
        keyAreas: [
          "Thiết kế hệ thống (System Design)",
          "Tổ chức cấu trúc phần mềm dạng mô-đun",
          "Quản lý dữ liệu & tính nhất quán",
          "Đánh giá & biện luận trade-off",
          "Giải pháp dễ bảo trì & mở rộng",
        ],
      },
    },
    roadmap: {
      badge: "LỘ TRÌNH PHÁT TRIỂN",
      title: "Lộ trình rèn luyện năng lực từng bước",
      subtitle:
        "Mục tiêu phát triển có định hướng rõ ràng, từ củng cố nền tảng kỹ thuật đến phát triển chuyên môn sâu.",
      milestoneStatus: "Mục tiêu phát triển tương lai",
      steps: [
        {
          stepNumber: "01",
          stepLabel: "Bước 1",
          title: "Foundation",
          description:
            "Củng cố kiến thức backend, database, networking, Linux và các nguyên lý thiết kế phần mềm.",
          topics: [
            "Backend Engineering",
            "Databases & SQL/NoSQL",
            "Computer Networking",
            "Linux Systems",
            "Software Design Principles",
          ],
        },
        {
          stepNumber: "02",
          stepLabel: "Bước 2",
          title: "Deployment and Operations",
          description:
            "Thực hành Docker, CI/CD, triển khai trên server, cấu hình môi trường, logging, monitoring và rollback.",
          topics: [
            "Docker Containerization",
            "CI/CD Pipelines",
            "Server Deployment",
            "Environment Config",
            "Logging & Monitoring",
            "Rollback Strategies",
          ],
        },
        {
          stepNumber: "03",
          stepLabel: "Bước 3",
          title: "System Design",
          description:
            "Đi sâu vào system design, concurrency, data consistency, resilience, performance và scalability.",
          topics: [
            "System Design Patterns",
            "Concurrency & Parallelism",
            "Data Consistency Models",
            "Resilience & Fault Tolerance",
            "Performance Optimization",
            "Scalability Tactics",
          ],
        },
        {
          stepNumber: "04",
          stepLabel: "Bước 4",
          title: "Deeper Expertise",
          description:
            "Tích lũy kinh nghiệm thực tế và tiếp tục phát triển đồng thời năng lực DevOps Engineering và Software Architecture.",
          topics: [
            "Kinh nghiệm giải quyết vấn đề thực tế",
            "Tích hợp năng lực DevOps Engineering",
            "Nâng cao tư duy Software Architecture",
            "Tối ưu vòng đời hệ thống end-to-end",
          ],
        },
      ],
    },
    longTermGoal: {
      badge: "MỤC TIÊU DÀI HẠN",
      title: "Tầm nhìn kỹ sư đa tầng hệ thống",
      description:
        "Mục tiêu dài hạn của tôi là trở thành một kỹ sư có khả năng nhìn nhận hệ thống ở cả cấp độ ứng dụng lẫn hạ tầng, đưa ra quyết định kỹ thuật có cơ sở và góp phần đảm bảo chất lượng hệ thống trong suốt vòng đời phát triển. Tôi hướng đến việc xây dựng chuyên môn sâu thông qua giải quyết vấn đề thực tế, cải tiến liên tục và hiểu rõ lý do đằng sau mỗi quyết định kỹ thuật.",
      pillars: [
        {
          title: "Nhìn nhận hệ thống ở cả cấp độ ứng dụng lẫn hạ tầng",
          desc: "Bao quát toàn diện từ code, business logic, cấu trúc dữ liệu cho đến máy chủ, mạng và môi trường triển khai thực tế.",
        },
        {
          title: "Đưa ra quyết định kỹ thuật có cơ sở",
          desc: "Mọi lựa chọn công nghệ đều xuất phát từ phân tích yêu cầu kỹ lưỡng, đo lường đánh đổi và giải quyết đúng bài toán.",
        },
        {
          title: "Đảm bảo chất lượng hệ thống suốt vòng đời",
          desc: "Đồng hành cùng sản phẩm từ khâu thiết kế, hiện thực hóa, kiểm thử đến triển khai, vận hành và liên tục cải tiến.",
        },
      ],
    },
  },
  contact: {
    badge: "Liên hệ",
    title: "Cùng kết nối & Hợp tác",
    subtitle: "Bạn có ý tưởng dự án hoặc muốn trao đổi về cơ hội hợp tác? Đừng ngần ngại liên hệ với tôi.",
    emailLabel: "Địa chỉ Email",
    locationLabel: "Địa điểm",
    socialLabel: "Mạng xã hội",
  },
  footer: {
    rights: "Bảo lưu mọi quyền.",
    builtWith: "Xây dựng bằng Next.js, React 19 & Tailwind CSS.",
  },
};
