/// <reference path='../typings/steps.d.ts' />
/// <reference path='../typings/gherkin.d.ts' />
import { MockApiService } from '../services/mock_api_service';

export const { I } = inject();

export const mockApiService = new MockApiService();
