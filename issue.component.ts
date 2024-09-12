import { Component, OnInit } from '@angular/core';
import { IssueService, Issue } from '../issue.service';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {

  issues: Issue[] = [];
  issue: Issue | null = null;

  constructor(private issueService: IssueService) { }

  ngOnInit(): void {}

  // CREATE Issue
  createIssue() {
    const newIssue: Issue = { id: 0, title: 'New Issue', description: 'Issue Description' };
    this.issueService.createIssue(newIssue).subscribe(response => {
      console.log('Created Issue:', response);
    });
  }

  // READ all Issues
  getIssues() {
    this.issueService.getIssue().subscribe(response => {
      this.issues = response as Issue[];
      console.log('All Issues:', this.issues);
    });
  }

  // READ a specific Issue by ID
  getIssueById(id: number) {
    this.issueService.getIssue(id).subscribe(response => {
      this.issue = response as Issue;
      console.log('Issue by ID:', this.issue);
    });
  }

  // UPDATE Issue
  updateIssue() {
    const updatedIssue: Issue = { id: 1, title: 'Updated Issue', description: 'Updated Description' };
    this.issueService.updateIssue(updatedIssue.id, updatedIssue).subscribe(response => {
      console.log('Updated Issue:', response);
    });
  }

  // DELETE Issue
  deleteIssue(id: number) {
    this.issueService.deleteIssue(id).subscribe(response => {
      console.log('Deleted Issue:', response);
    });
  }
}


