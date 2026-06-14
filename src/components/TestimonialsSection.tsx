import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Антон Павлович — педагог от бога. Мой сын боялся истории, а после занятий сдал ОГЭ на 4. Объясняет так, что даже сложные события запоминаются легко и надолго.",
    name: "Елена Смирнова",
    role: "Мама ученика 9 класса",
  },
  {
    quote:
      "Готовилась к ЕГЭ по истории с нуля. За три месяца занятий с Антоном Павловичем набрала 78 баллов. Он умеет объяснить любую тему так, что она становится понятной и интересной.",
    name: "Анастасия К.",
    role: "Выпускница, поступила в вуз",
  },
  {
    quote:
      "Занимаемся уже второй год. Дочь победила на районной олимпиаде по истории — это полностью заслуга Антона Павловича. Профессионал, который по-настоящему вкладывается в каждого ученика.",
    name: "Дмитрий Волков",
    role: "Папа ученицы 8 класса",
  },
  {
    quote:
      "Я взрослый, учусь для себя. Антон Павлович терпеливо отвечает на все вопросы, не торопит. После каждого занятия чувствую, что история открывается с новой стороны.",
    name: "Михаил Р.",
    role: "Взрослый студент",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPosition += scrollSpeed

      if (scrollContainer.scrollWidth && scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Что говорят ученики и родители
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
          Результаты говорят сами за себя — высокие баллы на экзаменах, победы в олимпиадах и настоящий интерес к предмету.
        </p>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {/* Duplicate testimonials for seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-[90vw] sm:w-[450px] border-none shadow-lg">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-base sm:text-lg mb-6 leading-relaxed text-pretty min-h-[120px]">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}