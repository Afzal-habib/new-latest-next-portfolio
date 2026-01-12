// Skill type definitions

export type SkillCategory = 'Frontend' | 'Backend' | 'Tools' | 'Design' | 'Database' | 'Mobile' | 'Integrations' | 'Other'
export type ProficiencyLevel = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100
export type ProficiencyLabel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'

export interface Skill {
  id: string
  name: string
  slug: string
  
  // Categorization
  category: SkillCategory
  subcategory?: string
  
  // Proficiency
  proficiency: ProficiencyLevel
  proficiencyLabel: ProficiencyLabel
  yearsOfExperience: number
  
  // Description
  description: string
  detailedDescription?: string
  
  // Visual
  icon: string // Lucide icon name or 'custom'
  customIcon?: string // SVG string for custom icons
  color?: string // Gradient or solid color class
  
  // Relations
  relatedProjects?: string[] // Project IDs
  relatedSkills?: string[] // Skill IDs
  
  // Organization
  featured: boolean
  order: number
}
