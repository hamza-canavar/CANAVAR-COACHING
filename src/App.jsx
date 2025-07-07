import React, { useState, useCallback, useMemo, Suspense, lazy } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import {
  Menu,
  X,
  Star,
  Users,
  Target,
  BookOpen,
  MessageCircle,
  Mail,
  Phone,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  CheckCircle,
  Award,
  TrendingUp,
  Heart
} from 'lucide-react'
import LazyImage from './components/LazyImage.jsx'
import { smoothScroll, throttle } from './utils/performance.js'
import logo from './assets/logo.png'
import heroBg from './assets/hero-bg.jpg'
import personalTraining from './assets/personal-training.jpg'
import healthyFood from './assets/healthy-food.jpg'
import mealPrep from './assets/meal-prep.jpg'
import hamzaCanavar from './assets/hamza-canavar.jpg'
import recipeBookCover from './assets/recipe-book-cover.png'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [discountCode, setDiscountCode] = useState('')

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  const scrollToSection = useCallback(throttle((sectionId) => {
    smoothScroll(sectionId, 80)
    setIsMenuOpen(false)
  }, 300), [])

  const openWhatsApp = useCallback(throttle((customMessage) => {
    if (isLoading) return
    setIsLoading(true)
    
    try {
      const defaultMessage = "Online Coaching"
      let message = customMessage || defaultMessage
      
      // إضافة كود الخصم إلى الرسالة إذا كان موجوداً
      if (discountCode.trim()) {
        const codePattern = /\d+$/
        const match = discountCode.match(codePattern)
        if (match && ['10', '20', '30'].includes(match[0])) {
          message += ` - ${discountCode}`
        }
      }
      
      const phoneNumber = "201285721685"
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
      window.open(url, "_blank")
    } catch (error) {
      console.error('Error opening WhatsApp:', error)
    } finally {
      setTimeout(() => setIsLoading(false), 1000)
    }
  }, 1000), [isLoading, discountCode])

  const socialLinks = useMemo(() => [
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@canavar_hamza?_t=ZS-8xmmJhGIxPz&_r=1',
      username: '@canavar_hamza',
      icon: (
        <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.43z"/>
        </svg>
      ),
      bgColor: 'bg-black'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@hamza_canavar?si=M9PRRXKmALSjJcD3',
      username: '@hamza_canavar',
      icon: <Youtube className="w-9 h-9 text-white" />,
      bgColor: 'bg-red-600'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/canavar_hamza?igsh=cGNjMWhoNTluYnZo',
      username: '@canavar_hamza',
      icon: <Instagram className="w-9 h-9 text-white" />,
      bgColor: 'bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500'
    }
  ], [])

  const packages = useMemo(() => [
    {
      id: 'silver',
      name: 'الباقة Silver',
      description: 'متابعة أسبوعية',
      color: '#C0C0C0',
      borderColor: 'border-gray-400',
      features: [
        'متابعة أسبوعية لمتابعة التطورات',
        'برنامج تدريبي مخصص حسب الهدف',
        'برنامج غذائي مناسب لك ولاسلوب حياتك',
        'خطة مكملات حسب الرغبة',
        'فيديوهات شرح للتمارين',
        'الإجابة على جميع الأسئلة والاستفسارات عن طريق الواتساب أثناء المتابعة الأسبوعية'
      ],
      whatsappMessage: 'تفاصيل باقة Silver'
    },
    {
      id: 'gold',
      name: 'الباقة Gold',
      description: 'متابعة يومية',
      color: '#FFD700',
      borderColor: 'border-yellow-500',
      isPopular: true,
      features: [
        'متابعة يومية لمراقبة التطورات خطوة بخطوة لضمان الالتزام',
        'برنامج تدريبي مخصص حسب الهدف',
        'برنامج غذائي مناسب لك ولاسلوب حياتك',
        'خطة مكملات حسب الرغبة',
        'فيديوهات شرح للتمارين',
        'فيديوهات أسبوعية لتقييم وتعديل الأداء',
        'الإجابة على جميع الاستفسارات والأسئلة عن طريق الواتساب بشكل يومي'
      ],
      whatsappMessage: 'تفاصيل باقة Gold'
    },
    {
      id: 'platinum',
      name: 'الباقة Platinum',
      description: 'متابعة خاصة VIP',
      color: '#E5E4E2',
      borderColor: 'border-purple-500',
      features: [
        'متابعة خاصة عن طريق الواتساب والهاتف الشخصي على مدار الساعة',
        'برنامج تدريبي مخصص حسب الهدف',
        'برنامج غذائي مناسب لك ولاسلوب حياتك',
        'خطة مكملات حسب الرغبة',
        'فيديوهات شرح للتمارين',
        'فيديوهات أسبوعية لتقييم وتعديل الأداء',
        'كتاب الوصفات الصحية',
        'الإجابة على جميع الاستفسارات والأسئلة عن طريق الواتساب والهاتف الشخصي على مدار الساعة',
        'الأولوية في الرد والتوجيه والتعديل',
        'التحضير للبطولات والمنافسات'
      ],
      whatsappMessage: 'تفاصيل باقة Platinum'
    }
  ], [])

  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    }>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="fixed top-0 w-full bg-secondary/95 backdrop-blur-sm border-b-2 border-primary z-50 shadow-xl">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <LazyImage src={logo} alt="CANAVAR COACHING" className="h-12 w-auto" />
                <div className="hidden md:block">
                  <h1 className="text-xl font-black text-foreground tracking-wide">CANAVAR COACHING</h1>
                  <p className="text-sm text-primary font-bold">Science Based Coaching</p>
                </div>
              </div>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors duration-200 font-bold text-lg">الرئيسية</button>
                <button onClick={() => scrollToSection('packages')} className="text-foreground hover:text-primary transition-colors duration-200 font-bold text-lg">الباقات</button>
                <button onClick={() => scrollToSection('book')} className="text-foreground hover:text-primary transition-colors duration-200 font-bold text-lg">كتاب الوصفات</button>
                <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors duration-200 font-bold text-lg">عني</button>
                <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors duration-200 font-bold text-lg">تواصل معنا</button>
              </nav>

              {/* Mobile Menu Button */}
              <button 
                onClick={toggleMenu}
                className="md:hidden p-2 rounded-lg hover:bg-primary/20 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} className="text-foreground" /> : <Menu size={24} className="text-foreground" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <nav className="md:hidden mt-4 pb-4 border-t-2 border-primary pt-4 animate-in slide-in-from-top duration-200">
                <div className="flex flex-col space-y-4">
                  <button onClick={() => scrollToSection('home')} className="text-right text-foreground hover:text-primary transition-colors duration-200 font-bold text-lg">الرئيسية</button>
                  <button onClick={() => scrollToSection('packages')} className="text-right text-foreground hover:text-primary transition-colors duration-200 font-bold text-lg">الباقات</button>
                  <button onClick={() => scrollToSection('book')} className="text-right text-foreground hover:text-primary transition-colors duration-200 font-bold text-lg">كتاب الوصفات</button>
                  <button onClick={() => scrollToSection('about')} className="text-right text-foreground hover:text-primary transition-colors duration-200 font-bold text-lg">عني</button>
                  <button onClick={() => scrollToSection('contact')} className="text-right text-foreground hover:text-primary transition-colors duration-200 font-bold text-lg">تواصل معنا</button>
                </div>
              </nav>
            )}
          </div>
        </header>

        {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 relative overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Training Background" className="w-full h-full object-cover opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 to-primary/30"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 text-center lg:text-right mb-8 lg:mb-0">
              <h1 className="text-5xl lg:text-7xl font-black text-foreground mb-6 tracking-wider">
                CANAVAR COACHING
              </h1>
              <h2 className="text-3xl lg:text-4xl text-primary mb-6 font-black">
                Science Based Coaching
              </h2>
              <p className="text-xl text-muted mb-8 max-w-2xl font-bold leading-relaxed">
                نقدم لك التدريب العلمي المبني على أحدث الأبحاث والدراسات العلمية لتحقيق أهدافك في اللياقة البدنية والتغذية بطريقة صحية ومستدامة
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" onClick={() => scrollToSection('packages')} className="text-xl px-10 py-4 bg-primary hover:bg-primary/80 text-foreground font-black border-2 border-primary">
                  اكتشف باقاتنا
                </Button>
                <Button variant="outline" size="lg" onClick={() => scrollToSection('contact')} className="text-xl px-10 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-foreground font-black">
                  تواصل معنا
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <img src={logo} alt="CANAVAR COACHING" className="w-72 h-72 lg:w-96 lg:h-96 object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">باقات التدريب الأون لاين</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              اختر الباقة التي تناسب احتياجاتك وابدأ رحلتك نحو تحقيق أهدافك
            </p>
          </div>
          
          {/* Discount Code Section */}
          <div className="max-w-md mx-auto mb-12">
            <div className="bg-card border-2 border-primary rounded-xl p-6 shadow-xl">
              <h3 className="text-xl font-black text-foreground mb-4 text-center">أكواد الخصم</h3>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="أدخل كود الخصم"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  className="flex-1 px-4 py-3 border-2 border-primary rounded-lg bg-background text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary font-bold"
                />
                <button
                  onClick={() => setDiscountCode('')}
                  className="px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/80 transition-colors font-bold"
                >
                  مسح
                </button>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Silver Package */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <Card className="relative bg-gradient-to-br from-gray-300 to-gray-500 border-0 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gray-400 to-gray-600"></div>
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 mx-auto mb-4 bg-foreground rounded-full flex items-center justify-center shadow-lg">
                    <Award className="w-10 h-10 text-gray-600" />
                  </div>
                  <Badge className="w-fit mx-auto mb-4 bg-gray-600 text-foreground text-lg px-4 py-2">الباقة السيلفر</Badge>
                  <CardTitle className="text-2xl text-gray-800 font-bold">متابعة أسبوعية</CardTitle>
                  <CardDescription className="text-gray-700 font-medium">للمبتدئين والراغبين في المتابعة المنتظمة</CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800 text-sm">متابعة أسبوعية لمتابعة التطورات</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800 text-sm">برنامج تدريبي مخصص حسب الهدف</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800 text-sm">برنامج غذائي مناسب لك ولاسلوب حياتك</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800 text-sm">خطة مكملات حسب الرغبة</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800 text-sm">فيديوهات شرح للتمارين</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800 text-sm">الإجابة على جميع الأسئلة والاستفسارات عن طريق الواتساب</span>
                    </li>
                  </ul>
                  <Button 
                    className="w-full bg-gray-700 hover:bg-gray-800 text-foreground font-bold py-3 rounded-xl transition-all duration-300 transform hover:scale-105" 
                    onClick={() => openWhatsApp("تفاصيل باقة Silver")}
                  >
                    تفاصيل الباقة Silver
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Gold Package */}
            <div className="relative group">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <Badge className="bg-primary text-foreground px-4 py-2 text-sm font-bold shadow-lg">الأكثر شعبية</Badge>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <Card className="relative bg-gradient-to-br from-yellow-300 to-yellow-500 border-0 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 scale-105">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 mx-auto mb-4 bg-foreground rounded-full flex items-center justify-center shadow-lg">
                    <Star className="w-10 h-10 text-yellow-600" />
                  </div>
                  <Badge className="w-fit mx-auto mb-4 bg-yellow-600 text-foreground text-lg px-4 py-2">الباقة الجولد</Badge>
                  <CardTitle className="text-2xl text-yellow-900 font-bold">متابعة يومية</CardTitle>
                  <CardDescription className="text-yellow-800 font-medium">للجادين في تحقيق النتائج السريعة</CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-800 mt-0.5 flex-shrink-0" />
                      <span className="text-yellow-900 text-sm">متابعة يومية لمراقبة التطورات خطوة بخطوة</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-800 mt-0.5 flex-shrink-0" />
                      <span className="text-yellow-900 text-sm">برنامج تدريبي مخصص حسب الهدف</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-800 mt-0.5 flex-shrink-0" />
                      <span className="text-yellow-900 text-sm">برنامج غذائي مناسب لك ولاسلوب حياتك</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-800 mt-0.5 flex-shrink-0" />
                      <span className="text-yellow-900 text-sm">خطة مكملات حسب الرغبة</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-800 mt-0.5 flex-shrink-0" />
                      <span className="text-yellow-900 text-sm">فيديوهات شرح للتمارين</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-800 mt-0.5 flex-shrink-0" />
                      <span className="text-yellow-900 text-sm">فيديوهات أسبوعية لتقييم وتعديل الأداء</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-800 mt-0.5 flex-shrink-0" />
                      <span className="text-yellow-900 text-sm">الإجابة على جميع الاستفسارات بشكل يومي</span>
                    </li>
                  </ul>
                  <Button 
                    className="w-full bg-yellow-700 hover:bg-yellow-800 text-foreground font-bold py-3 rounded-xl transition-all duration-300 transform hover:scale-105" 
                    onClick={() => openWhatsApp("تفاصيل باقة Gold")}
                  >
                    تفاصيل الباقة Gold
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Platinum Package */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <Card className="relative bg-gradient-to-br from-purple-300 to-purple-500 border-0 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 to-purple-600"></div>
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 mx-auto mb-4 bg-foreground rounded-full flex items-center justify-center shadow-lg">
                    <TrendingUp className="w-10 h-10 text-purple-600" />
                  </div>
                  <Badge className="w-fit mx-auto mb-4 bg-purple-600 text-foreground text-lg px-4 py-2">الباقة البلاتينيوم</Badge>
                  <CardTitle className="text-2xl text-purple-900 font-bold">متابعة خاصة VIP</CardTitle>
                  <CardDescription className="text-purple-800 font-medium">للمحترفين والراغبين في الخدمة المميزة</CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-800 mt-0.5 flex-shrink-0" />
                      <span className="text-purple-900 text-sm">متابعة خاصة على مدار الساعة</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-800 mt-0.5 flex-shrink-0" />
                      <span className="text-purple-900 text-sm">برنامج تدريبي مخصص حسب الهدف</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-800 mt-0.5 flex-shrink-0" />
                      <span className="text-purple-900 text-sm">برنامج غذائي مناسب لك ولاسلوب حياتك</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-800 mt-0.5 flex-shrink-0" />
                      <span className="text-purple-900 text-sm">خطة مكملات حسب الرغبة</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-800 mt-0.5 flex-shrink-0" />
                      <span className="text-purple-900 text-sm">فيديوهات شرح للتمارين</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-800 mt-0.5 flex-shrink-0" />
                      <span className="text-purple-900 text-sm">فيديوهات أسبوعية لتقييم وتعديل الأداء</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-800 mt-0.5 flex-shrink-0" />
                      <span className="text-purple-900 text-sm">كتاب الوصفات الصحية</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-800 mt-0.5 flex-shrink-0" />
                      <span className="text-purple-900 text-sm">الأولوية في الرد والتوجيه</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-800 mt-0.5 flex-shrink-0" />
                      <span className="text-purple-900 text-sm">التحضير للبطولات والمنافسات</span>
                    </li>
                  </ul>
                  <Button 
                    className="w-full bg-purple-700 hover:bg-purple-800 text-foreground font-bold py-3 rounded-xl transition-all duration-300 transform hover:scale-105" 
                    onClick={() => openWhatsApp("تفاصيل باقة Platinum")}
                  >
                    تفاصيل الباقة Platinum
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Recipe Book Section */}
      <section id="book" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative w-full max-w-md mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-primary rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                <LazyImage src={recipeBookCover} alt="Recipe Book Cover" className="relative w-full h-auto rounded-3xl shadow-2xl border-4 border-primary transform group-hover:scale-105 transition-transform duration-300" />
              </div>
            </div>
            <div className="lg:w-1/2 text-center lg:text-right">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">كتاب الوصفات الصحية</h2>
              <p className="text-lg text-muted mb-6">
                اكتشف مجموعة واسعة من الوصفات الصحية واللذيذة التي تساعدك على تحقيق أهدافك الغذائية دون التضحية بالطعم.
              </p>
              <ul className="space-y-3 text-muted mb-8">
                <li className="flex items-center justify-center lg:justify-end gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>وصفات متنوعة لوجبات الإفطار والغداء والعشاء</span>
                </li>
                <li className="flex items-center justify-center lg:justify-end gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>قائمة تسوق شاملة لكل وصفة</span>
                </li>
                <li className="flex items-center justify-center lg:justify-end gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>نصائح غذائية لتعزيز صحتك</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-3 bg-primary hover:bg-primary/80 text-foreground" 
                  onClick={() => openWhatsApp("سعر وتفاصيل كتاب الوصفات")}
                >
                  سعر وتفاصيل كتاب الوصفات
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-3 border-primary text-primary hover:bg-primary hover:text-foreground" 
                  onClick={() => openWhatsApp("النسخة المجانية من كتاب الوصفات")}
                >
                  النسخة المجانية
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-right">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">عني</h2>
              <h3 className="text-2xl font-semibold text-primary mb-4">C/ HAMZA CANAVAR</h3>
              <p className="text-lg text-muted mb-6">
                مدرب دولي ولاعب المنتخب الوطني سابقا، عضو السجل الاوروبي لمحترفي التمارين والصحه، حصل على العديد من الشهادات والاعتمادات في التدريب الاون لاين والتدريب الشخصي وتدريب الفتنس وتغذيه الرياضيين والتغذيه العلاجيه والبطولات المحليه والدوليه.
              </p>
              <p className="text-lg text-muted mb-6">
                لديه خبرة علمية وعملية واسعة في تصميم برامج التدريب و التغذيه الاحترافيه، متخصص في تحسين الأداء البدني، بناء الكتلة العضلية، وخسارة الدهون. ساعدتُ المئات من الأشخاص على تحقيق تحولات صحية وبدنية فعّالة، من خلال تقييم دقيق، دعم تحفيزي مستمر، وبرامج مبنية على أسس علمية موثوقة، لتحقيق أفضل النتائج وتغيير نمط حياتهم نحو الأفضل.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted">عميل راضٍ</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">8+</div>
                  <div className="text-sm text-muted">سنوات خبرة</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted">شهادة معتمدة</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted">معدل النجاح</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative w-full max-w-md mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-primary rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                <LazyImage src={hamzaCanavar} alt="C/ HAMZA CANAVAR" className="relative w-full h-auto rounded-3xl shadow-2xl border-4 border-primary transform group-hover:scale-105 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">تواصل معنا</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              نحن هنا لمساعدتك في تحقيق أهدافك. تواصل معنا عبر أي من الطرق التالية
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer bg-card border-primary" onClick={openWhatsApp}>
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-foreground">واتساب</CardTitle>
                <CardDescription className="text-muted">تواصل فوري</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer bg-card border-primary" onClick={() => window.open("mailto:info@canavarcoaching.com")}>
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-foreground">البريد الإلكتروني</CardTitle>
                <CardDescription className="text-muted">info@canavarcoaching.com</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer bg-card border-primary" onClick={() => window.open("tel:+1234567890")}>
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-foreground">الهاتف</CardTitle>
                <CardDescription className="text-muted">+1234567890</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow bg-card border-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-foreground">التقييم</CardTitle>
                <CardDescription className="text-muted">5.0 نجوم</CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Social Media */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-6">تابعنا على وسائل التواصل الاجتماعي</h3>
            <div className="flex justify-center space-x-6">
              <button 
                onClick={() => window.open("https://www.tiktok.com/@canavar_hamza?_t=ZS-8xmmJhGIxPz&_r=1", "_blank")}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-16 h-16 bg-foreground rounded-full flex items-center justify-center shadow-lg border-2 border-primary group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-background" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.43z"/>
                  </svg>
                </div>
                <span className="text-sm text-muted group-hover:text-primary">@canavar_hamza</span>
              </button>
              <button 
                onClick={() => window.open("https://youtube.com/@hamza_canavar?si=M9PRRXKmALSjJcD3", "_blank")}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg border-2 border-primary group-hover:scale-110 transition-transform duration-300">
                  <Youtube className="w-8 h-8 text-primary-foreground" />
                </div>
                <span className="text-sm text-muted group-hover:text-primary">@hamza_canavar</span>
              </button>
              <button 
                onClick={() => window.open("https://www.instagram.com/canavar_hamza?igsh=cGNjMWhoNTluYnZo", "_blank")}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500 rounded-full flex items-center justify-center shadow-lg border-2 border-primary group-hover:scale-110 transition-transform duration-300">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm text-muted group-hover:text-primary">@canavar_hamza</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-foreground py-8 border-t-2 border-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <LazyImage src={logo} alt="CANAVAR COACHING" className="h-8 w-auto" />
              <div>
                <h3 className="font-bold text-foreground">CANAVAR COACHING</h3>
                <p className="text-sm text-muted">Science Based Coaching</p>
              </div>
            </div>
            <div className="text-center md:text-left">
              <p className="text-sm text-muted">© 2024 CANAVAR COACHING. جميع الحقوق محفوظة.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button 
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-50"
      >
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      </button>
    </div>
  </Suspense>
  )
}

export default App


