// Core
import { ChangeEvent } from 'react';

// Types
export type contactItem = {
    id: string;
    url: string;
}

export type educationItem = {
    id: string;
    date: string;
    degree: string;
    description: string;
}

export type descriptionList = {
    id: string;
    description: string;
}

export type project = {
    id: string,
    name: string,
    customer: string,
    duration: string,
    role: string,
    responsibilities: string,
    teamSize: string,
    stack: string,
}

export type experienceItem = {
    id: string;
    position: string;
    location: string;
    date: string;
    descriptionList: Array<descriptionList>;
    projects: Array<project>
}

export type languagesItem = {
    id: string;
    language: string;
}

export type inputVoidFunc = (event: ChangeEvent<HTMLInputElement>) => void;
export type inputProjectVoidFunc = (event: ChangeEvent<HTMLInputElement>, project: project) => void;

export type textareaVoidFunc = (event: ChangeEvent<HTMLTextAreaElement>) => void;
export type textareaProjectVoidFunc = (event: ChangeEvent<HTMLTextAreaElement>, project: project) => void;
