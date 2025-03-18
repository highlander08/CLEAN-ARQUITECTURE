import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { ProjectTypeOrmRepository } from './project.repository';
import { ProjectsWithUseCaseController } from './projects-with-use-case.controller';
import { ProjectsService } from './projects.service';
import { CreateProjectUseCase } from './use-cases/create-project.use-case';
import { FindAllProjectsUseCase } from './use-cases/find-all-projects.use-case';
import { StartProjectUseCase } from './use-cases/start-project.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  controllers: [
    //ProjectsController,
    ProjectsWithUseCaseController,
  ],
  providers: [
    ProjectsService,
    CreateProjectUseCase,
    FindAllProjectsUseCase,
    StartProjectUseCase,
    ProjectTypeOrmRepository,
    {
      provide: 'IProjectRepository',
      useExisting: ProjectTypeOrmRepository,
    },
  ],
})
export class ProjectsModule {}
