import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, BookOpen, Monitor, ClipboardList, FileText, Sparkles } from "lucide-react"

const skills = [
  {
    icon: BookOpen,
    title: "Объяснение тем по истории",
    description: "Помогаю разобраться в исторических событиях, датах и причинно-следственных связях — понятно и без зубрёжки.",
  },
  {
    icon: FileText,
    title: "Подготовка к ОГЭ и ЕГЭ",
    description: "Знаю структуру экзаменов, разбираю типовые задания и помогаю выстроить системную подготовку.",
  },
  {
    icon: ClipboardList,
    title: "Создание тестов и заданий",
    description: "Разрабатываю авторские тесты и учебные задания под конкретные темы и уровень учеников.",
  },
  {
    icon: Monitor,
    title: "Работа с цифровыми платформами",
    description: "Использую 1С:Урок, OnlineTestPad, Яндекс Формы и Банк тестов для создания интерактивных материалов.",
  },
]

export function SkillsSection() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            <Sparkles className="h-4 w-4" />
            Чем могу помочь
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance">
            Навыки и <span className="text-primary">направления</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Что я умею и в чём могу быть полезен ученикам прямо сейчас
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-background/50 backdrop-blur-sm"
            >
              <CardContent className="p-6 flex items-start gap-4">
                <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 flex-shrink-0 group-hover:scale-110">
                  <skill.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{skill.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-1">Образование</p>
                <h3 className="font-bold text-xl mb-2">
                  Тихоокеанский государственный университет (ТОГУ)
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Студент педагогического направления — специальность{" "}
                  <span className="text-foreground font-medium">«История и обществознание»</span>.
                  Изучаю методику преподавания, педагогику и дидактику. Параллельно создаю авторские учебные материалы
                  и применяю цифровые инструменты в образовании.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
