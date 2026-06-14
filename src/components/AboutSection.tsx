import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Sparkles } from "lucide-react"

const values = [
  { title: "Свежий взгляд", description: "Как начинающий педагог смотрю на обучение без шаблонов — ищу то, что реально работает" },
  { title: "Доступное объяснение", description: "Сложные темы объясняю простым языком, без лишней теории и скучных формулировок" },
  { title: "Цифровые инструменты", description: "Использую современные платформы: тесты онлайн, интерактивные задания и формы" },
  { title: "Системность", description: "Строю занятия последовательно — от базы к уверенному пониманию темы" },
  { title: "Поддержка и мотивация", description: "Создаю комфортную среду, где ученик не боится ошибаться и задавать вопросы" },
  { title: "Гибкий формат", description: "Занятия онлайн и офлайн, в удобное время и в комфортном для ученика темпе" },
]

const stats = [
  { number: "4", label: "Авторских материала" },
  { number: "🎓", label: "Студент-педагог" },
  { number: "100%", label: "Энтузиазм" },
  { number: "0", label: "Скучных уроков" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            <Sparkles className="h-4 w-4" />
            Обо мне
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Педагогика, которая{" "}
            <span className="text-primary relative">
              вдохновляет
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                <path d="M0 4C50 2 150 6 200 4" stroke="currentColor" strokeWidth="2" className="text-primary" />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Я — Мажара Антон Павлович, студент педагогического направления и начинающий педагог. Создаю авторские учебные материалы, провожу занятия и стремлюсь сделать обучение живым, понятным и интересным.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {values.map((value, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group cursor-default">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}