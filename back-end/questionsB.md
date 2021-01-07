# This is my answer for question B

## Theory
1. Using Subquery instead of LEFT JOIN.
2. Using Database Indexing to the tables.


## SQL
SELECT jobs.id                           AS `Jobs__id`, 
       jobs.name                         AS `Jobs__name`, 
       jobs.media_id                     AS `Jobs__media_id`, 
       jobs.job_category_id              AS `Jobs__job_category_id`, 
       jobs.job_type_id                  AS `Jobs__job_type_id`, 
       jobs.description                  AS `Jobs__description`, 
       jobs.detail                       AS `Jobs__detail`, 
       jobs.business_skill               AS `Jobs__business_skill`, 
       jobs.knowledge                    AS `Jobs__knowledge`, 
       jobs.location                     AS `Jobs__location`, 
       jobs.activity                     AS `Jobs__activity`, 
       jobs.academic_degree_doctor       AS `Jobs__academic_degree_doctor`, 
       jobs.academic_degree_master       AS `Jobs__academic_degree_master`, 
       jobs.academic_degree_professional AS `Jobs__academic_degree_professional`, 
       jobs.academic_degree_bachelor     AS `Jobs__academic_degree_bachelor`, 
       jobs.salary_statistic_group       AS `Jobs__salary_statistic_group`, 
       jobs.salary_range_first_year      AS `Jobs__salary_range_first_year`, 
       jobs.salary_range_average         AS `Jobs__salary_range_average`, 
       jobs.salary_range_remarks         AS `Jobs__salary_range_remarks`, 
       jobs.restriction                  AS `Jobs__restriction`, 
       jobs.estimated_total_workers      AS `Jobs__estimated_total_workers`, 
       jobs.remarks                      AS `Jobs__remarks`, 
       jobs.url                          AS `Jobs__url`, 
       jobs.seo_description              AS `Jobs__seo_description`, 
       jobs.seo_keywords                 AS `Jobs__seo_keywords`, 
       jobs.sort_order                   AS `Jobs__sort_order`, 
       jobs.publish_status               AS `Jobs__publish_status`, 
       jobs.version                      AS `Jobs__version`, 
       jobs.created_by                   AS `Jobs__created_by`, 
       jobs.created                      AS `Jobs__created`, 
       jobs.modified                     AS `Jobs__modified`, 
       jobs.deleted                      AS `Jobs__deleted`, 
       JobCategories.id                  AS `JobCategories__id`, 
       JobCategories.name                AS `JobCategories__name`, 
       JobCategories.sort_order          AS `JobCategories__sort_order`, 
       JobCategories.created_by          AS `JobCategories__created_by`, 
       JobCategories.created             AS `JobCategories__created`, 
       JobCategories.modified            AS `JobCategories__modified`, 
       JobCategories.deleted             AS `JobCategories__deleted`, 
       JobTypes.id                       AS `JobTypes__id`, 
       JobTypes.name                     AS `JobTypes__name`, 
       JobTypes.job_category_id          AS `JobTypes__job_category_id`, 
       JobTypes.sort_order               AS `JobTypes__sort_order`, 
       JobTypes.created_by               AS `JobTypes__created_by`, 
       JobTypes.created                  AS `JobTypes__created`, 
       JobTypes.modified                 AS `JobTypes__modified`, 
       JobTypes.deleted                  AS `JobTypes__deleted` 
       (SELECT id FROM jobs_personalities WHERE jobs.id = id AS JobsPersonalities )
       (SELECT name FROM personalities WHERE JobsPersonalities = id AND deleted IS NULL AS Personalities )
FROM   jobs Jobs 
                   
       LEFT JOIN jobs_practical_skills JobsPracticalSkills 
              ON jobs.id = ( JobsPracticalSkills.job_id ) 
       WHERE NOT 
       LEFT JOIN practical_skills PracticalSkills 
              ON ( PracticalSkills.id = 
                   ( JobsPracticalSkills.practical_skill_id ) 
                   AND ( PracticalSkills.deleted ) IS NULL ) 
       LEFT JOIN jobs_basic_abilities JobsBasicAbilities 
              ON jobs.id = ( JobsBasicAbilities.job_id ) 
       LEFT JOIN basic_abilities BasicAbilities 
              ON ( BasicAbilities.id = ( JobsBasicAbilities.basic_ability_id ) 
                   AND ( BasicAbilities.deleted ) IS NULL ) 
       LEFT JOIN jobs_tools JobsTools 
              ON jobs.id = ( JobsTools.job_id ) 
       LEFT JOIN affiliates Tools 
              ON ( Tools.type = 1 
                   AND Tools.id = ( JobsTools.affiliate_id ) 
                   AND ( Tools.deleted ) IS NULL ) 
       LEFT JOIN jobs_career_paths JobsCareerPaths 
              ON jobs.id = ( JobsCareerPaths.job_id ) 
       LEFT JOIN affiliates CareerPaths 
              ON ( CareerPaths.type = 3 
                   AND CareerPaths.id = ( JobsCareerPaths.affiliate_id ) 
                   AND ( CareerPaths.deleted ) IS NULL ) 
       LEFT JOIN jobs_rec_qualifications JobsRecQualifications 
              ON jobs.id = ( JobsRecQualifications.job_id ) 
       LEFT JOIN affiliates RecQualifications 
              ON ( RecQualifications.type = 2 
                   AND RecQualifications.id = ( 
                       JobsRecQualifications.affiliate_id ) 
                   AND ( RecQualifications.deleted ) IS NULL ) 
       LEFT JOIN jobs_req_qualifications JobsReqQualifications 
              ON jobs.id = ( JobsReqQualifications.job_id ) 
       LEFT JOIN affiliates ReqQualifications 
              ON ( ReqQualifications.type = 2 
                   AND ReqQualifications.id = ( 
                       JobsReqQualifications.affiliate_id ) 
                   AND ( ReqQualifications.deleted ) IS NULL ) 
       INNER JOIN job_categories JobCategories 
               ON ( JobCategories.id = ( jobs.job_category_id ) 
                    AND ( JobCategories.deleted ) IS NULL ) 
       INNER JOIN job_types JobTypes 
               ON ( JobTypes.id = ( jobs.job_type_id ) 
                    AND ( JobTypes.deleted ) IS NULL ) 
WHERE  ( ( JobCategories.name LIKE '%キャビンアテンダント%' 
            OR JobTypes.name LIKE '%キャビンアテンダント%' 
            OR jobs.name LIKE '%キャビンアテンダント%' 
            OR jobs.description LIKE '%キャビンアテンダント%' 
            OR jobs.detail LIKE '%キャビンアテンダント%' 
            OR jobs.business_skill LIKE '%キャビンアテンダント%' 
            OR jobs.knowledge LIKE '%キャビンアテンダント%' 
            OR jobs.location LIKE '%キャビンアテンダント%' 
            OR jobs.activity LIKE '%キャビンアテンダント%' 
            OR jobs.salary_statistic_group LIKE 
               '%キャビンアテンダント%' 
            OR jobs.salary_range_remarks LIKE '%キャビンアテンダント%' 
            OR jobs.restriction LIKE '%キャビンアテンダント%' 
            OR jobs.remarks LIKE '%キャビンアテンダント%' 
            OR Personalities.name LIKE '%キャビンアテンダント%' 
            OR PracticalSkills.name LIKE '%キャビンアテンダント%' 
            OR BasicAbilities.name LIKE '%キャビンアテンダント%' 
            OR Tools.name LIKE '%キャビンアテンダント%' 
            OR CareerPaths.name LIKE '%キャビンアテンダント%' 
            OR RecQualifications.name LIKE '%キャビンアテンダント%' 
            OR ReqQualifications.name LIKE '%キャビンアテンダント%' ) 
         AND publish_status = 1 
         AND ( jobs.deleted ) IS NULL ) 
GROUP  BY jobs.id 
ORDER  BY jobs.sort_order DESC, 
          jobs.id DESC 
LIMIT  50 offset 0 