import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, GraduationCap, Users, Star, Target, Brain } from "lucide-react"

const services = [
  {
    icon: BookOpen,
    title: "Индивидуальные занятия",
    description:
      "Персональные уроки в формате 1 на 1. Подстраиваюсь под темп, уровень и цели ученика. Вместе разбираем сложные темы, устраняем пробелы и выстраиваем уверенное понимание предмета.",
  },
  {
    icon: Users,
    title: "Групповые занятия",
    description:
      "Мини-группы до 4–6 человек. Формат позволяет сохранить индивидуальное внимание, при этом создаётся живая образовательная среда, где ученики учатся друг у друга.",
  },
  {
    icon: GraduationCap,
    title: "Подготовка к ЕГЭ и ОГЭ",
    description:
      "Структурированная программа подготовки к государственным экзаменам. Разбираем формат, решаем типовые задания, работаем над ошибками и настраиваемся на максимальный балл.",
  },
  {
    icon: Star,
    title: "Олимпиадная подготовка",
    description:
      "Углублённая программа для тех, кто хочет побеждать на олимпиадах. Нестандартные задачи, конкурсное мышление и стратегия выступления — всё для выхода на пьедестал.",
  },
  {
    icon: Target,
    title: "Ликвидация пробелов",
    description:
      "Экспресс-курс для тех, кто отстал от программы или имеет пробелы в базовых знаниях. Быстро диагностирую слабые места и выстраиваю чёткий план восстановления.",
  },
  {
    icon: Brain,
    title: "Развитие учебных навыков",
    description:
      "Учу не только предмету, но и тому, как учиться: планирование, работа с информацией, управление временем и снижение стресса перед экзаменами.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Направления работы
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Чем я могу <span className="text-primary">помочь</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          От первых шагов в предмете до победы на олимпиаде — выстраиваю обучение под конкретную цель каждого ученика.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}