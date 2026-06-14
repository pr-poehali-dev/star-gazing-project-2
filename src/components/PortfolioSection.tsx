import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Тест по истории",
    category: "Онлайн-тестирование · Банк тестов",
    image: "/placeholder.jpg",
    description:
      "Авторский тест по истории, опубликованный на платформе «Банк тестов». Позволяет ученикам проверить знания в интерактивном формате с мгновенной обратной связью.",
    url: "https://banktestov.ru/test/113879",
    tags: ["История", "Тест", "Банк тестов"],
  },
  {
    title: "Тест по истории",
    category: "Онлайн-тестирование · OnlineTestPad",
    image: "/placeholder.jpg",
    description:
      "Интерактивный тест по истории на платформе OnlineTestPad. Удобный формат для самопроверки и контрольного тестирования учеников с автоматической проверкой ответов.",
    url: "https://onlinetestpad.com/u6qxlegostp7o",
    tags: ["История", "Тест", "OnlineTestPad"],
  },
  {
    title: "Учебная форма",
    category: "Интерактивное задание · Яндекс Формы",
    image: "/placeholder.jpg",
    description:
      "Образовательная форма, созданная в Яндекс Формах. Используется для сбора ответов учеников, проверки знаний и организации обратной связи в удобном цифровом формате.",
    url: "https://forms.yandex.ru/u/6a2e55b184227c6a9770e49b",
    tags: ["Яндекс Формы", "Тестирование", "Обратная связь"],
  },
  {
    title: "Учебное задание",
    category: "Электронный урок · 1С:Урок",
    image: "/placeholder.jpg",
    description:
      "Авторское учебное задание на платформе 1С:Урок. Электронный образовательный материал, разработанный для интерактивной работы на уроке и самостоятельного изучения.",
    url: "https://urok.1c.ru/share/task/e264e5dff42369e1b13ff62f31e8d26e/",
    tags: ["1С:Урок", "Интерактив", "Задание"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Мои работы</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Авторские тесты, задания и образовательные материалы, созданные для работы с учениками в интерактивном цифровом формате.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="gap-2"
                    onClick={() => window.open(project.url, "_blank")}
                  >
                    Открыть материал <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{project.category}</p>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}