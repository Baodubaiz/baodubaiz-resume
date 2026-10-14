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
    badge: "Dự án tiêu biểu",
    title: "Sản phẩm & Sáng tạo",
    subtitle: "Tuyển chọn các ứng dụng web, nền tảng số và trải nghiệm tương tác mà tôi đã xây dựng.",
    viewProject: "Xem trực tiếp",
    sourceCode: "Mã nguồn",
  },
  experience: {
    badge: "Lộ trình sự nghiệp",
    title: "Kinh nghiệm & Học vấn",
    subtitle: "Hành trình nghề nghiệp, các vai trò và cột mốc của tôi trong ngành phát triển phần mềm.",
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
