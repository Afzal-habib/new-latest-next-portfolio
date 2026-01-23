'use client'

import { useParams, notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import * as LucideIcons from 'lucide-react'
import { useState } from 'react'
import { PageHero } from '@/components/layout'
import { Section, SectionHeading, Card, CardContent, Badge, Button } from '@/components/common'
import { getProjectBySlug, projects } from '@/data/projects'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { PROJECT_STATUS_COLORS } from '@/lib/constants'
import type { ProjectStatus } from '@/types/project'
import Image from 'next/image'

export default function ProjectDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const project = getProjectBySlug(slug)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showModal, setShowModal] = useState(false)

  if (!project) {
    notFound()
  }

  // Get adjacent projects for navigation
  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  return (
    <>
      <PageHero
        title={project.title}
        subtitle={project.shortDescription || project.description}
        showSocialLinks
      />

      {/* Project Overview */}
      <Section className="bg-muted/30">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              {/* Main Image */}
              <div
                className="relative aspect-[4/3] md:aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 cursor-pointer"
                onClick={() => setShowModal(true)}
              >
                <Image
                  src={project.images[currentImageIndex].url}
                  alt={project.images[currentImageIndex].alt}
                  fill
                  priority
                  quality={100}
                  className="w-full max-w-100 md:max-w-full h-full object-cover transition-transform hover:scale-105"
                />
                {project.images[currentImageIndex].caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <p className="text-sm text-white font-medium">{project.images[currentImageIndex].caption}</p>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 hover:opacity-100">
                  <LucideIcons.Expand className="h-8 w-8 text-white" />
                </div>
              </div>

              {/* Thumbnails */}
              {project.images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide max-w-100 md:max-w-full w-full">
                  {project.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        index === currentImageIndex
                          ? 'border-primary ring-2 ring-primary/20 shadow-lg scale-105'
                          : 'border-muted hover:border-primary/50 hover:shadow-md'
                      }`}
                    >
                      <Image
                        src={image.url}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold mb-4">About This Project</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              {project.longDescription && (
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {project.longDescription}
                </p>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            {/* Quick Info Card */}
            <Card variant="elevated">
              <CardContent className="p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Status</span>
                  <Badge className={PROJECT_STATUS_COLORS[project.status as ProjectStatus]}>
                    {project.status}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Category</span>
                  <Badge variant="secondary">{project.category}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Role</span>
                  <span className="text-sm font-medium">{project.role}</span>
                </div>
                {project.startDate && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Duration</span>
                    <span className="text-sm font-medium">
                      {new Date(project.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                      {project.endDate && ` - ${new Date(project.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}`}
                    </span>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="pt-4 space-y-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 font-medium text-primary-foreground transition-all hover:bg-primary/90"
                    >
                      <LucideIcons.ExternalLink className="h-4 w-4" />
                      View Live Demo
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-lg border border-border px-4 py-3 font-medium transition-all hover:bg-muted"
                    >
                      <LucideIcons.Github className="h-4 w-4" />
                      View Source Code
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Technologies */}
            <Card variant="glass">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Contributions & Challenges */}
      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Contributions */}
          {project.contributions && project.contributions.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card variant="elevated" className="h-full">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
                      <LucideIcons.CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-lg font-semibold">Key Contributions</h3>
                  </div>
                  <ul className="space-y-3">
                    {project.contributions.map((contribution, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <LucideIcons.ArrowRight className="h-4 w-4 mt-1 text-green-500 flex-shrink-0" />
                        <span className="text-muted-foreground">{contribution}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card variant="elevated" className="h-full">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/30">
                      <LucideIcons.Target className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                    </div>
                    <h3 className="text-lg font-semibold">Challenges Overcome</h3>
                  </div>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <LucideIcons.Zap className="h-4 w-4 mt-1 text-orange-500 flex-shrink-0" />
                        <span className="text-muted-foreground">{challenge}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </Section>

      {/* Key Learnings */}
      {project.learnings && project.learnings.length > 0 && (
        <Section className="bg-muted/30">
          <SectionHeading
            title="Key Learnings"
            subtitle="Insights and takeaways from this project"
            align="center"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {project.learnings.map((learning, index) => (
              <motion.div key={index} variants={staggerItem}>
                <Card variant="glass" hover="scale" className="h-full">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                      <LucideIcons.Lightbulb className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">{learning}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Section>
      )}

      {/* Project Navigation */}
      <Section>
        <div className="flex items-center justify-between gap-2 md:flex-row flex-col">
          {prevProject ? (
            <Link href={`/projects/${prevProject.slug}`} className="group flex-1">
              <Card variant="outline" hover="lift" className="h-full border-0">
                <CardContent className="p-2 flex items-center gap-4">
                  <LucideIcons.ArrowLeft className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <div>
                    <p className="text-xs text-muted-foreground">Previous Project</p>
                    <p className="font-medium group-hover:text-primary transition-colors line-clamp-1">
                      {prevProject.title}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          <Link href="/projects">
            <Button variant="outline" size="sm">
              <LucideIcons.Grid3X3 className="h-4 w-4 mr-2" />
              All Projects
            </Button>
          </Link>

          {nextProject ? (
            <Link href={`/projects/${nextProject.slug}`} className="group flex-1">
              <Card variant="outline" hover="lift" className="h-full border-0">
                <CardContent className="p-2 flex items-center md:justify-end gap-2">
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Next Project</p>
                    <p className="font-medium group-hover:text-primary transition-colors line-clamp-1">
                      {nextProject.title}
                    </p>
                  </div>
                  <LucideIcons.ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </CardContent>
              </Card>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold">Interested in Working Together?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            I&apos;m always open to discussing new projects and opportunities.
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <Button size="lg" className="group">
                <LucideIcons.MessageSquare className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </Link>
          </div>
        </motion.div>
      </Section>

      {/* Image Gallery Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <div className="relative w-100 md:w-full h-full md:max-w-[90vw] md:max-h-full p-0 md:p-4 mt-8" onClick={(e) => e.stopPropagation()}>
            <Image
              src={project.images[currentImageIndex].url}
              alt={project.images[currentImageIndex].alt}
             fill
              className="max-w-100 md:max-w-full h-full md:max-h-[80vh] object-contain rounded-lg"
            />
            {project.images[currentImageIndex].caption && (
              <div className="mb-2 md:mb-3 text-center absolute bottom-18 md:bottom-16 w-full left-1/2 -translate-x-1/2  ">
                <p className="text-white text-base md:text-lg font-medium">{project.images[currentImageIndex].caption}</p>
              </div>
            )}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-2 md:top-10 md:right-0 text-white hover:text-primary transition-colors cursor-pointer z-100"
            >
              <LucideIcons.X className="h-5 w-5" />
            </button>
            {project.images.length > 1 && (
              <>
                <button
                  onClick={() => setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : project.images.length - 1))}
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors bg-black/50 hover:bg-black/70 rounded-full p-3 cursor-pointer"
                >
                  <LucideIcons.ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={() => setCurrentImageIndex((prev) => (prev < project.images.length - 1 ? prev + 1 : 0))}
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors bg-black/50 hover:bg-black/70 rounded-full p-3 cursor-pointer"
                >
                  <LucideIcons.ChevronRight className="h-6 w-6" />
                </button>
                <div className="absolute bottom-16 md:bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex ? 'bg-primary' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
