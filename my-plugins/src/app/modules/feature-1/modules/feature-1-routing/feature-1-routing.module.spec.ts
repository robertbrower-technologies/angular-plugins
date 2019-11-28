import { Feature1RoutingModule } from './feature-1-routing.module';

describe('Feature1RoutingModule', () => {
  let feature1RoutingModule: Feature1RoutingModule;

  beforeEach(() => {
    feature1RoutingModule = new Feature1RoutingModule();
  });

  it('should create an instance', () => {
    expect(feature1RoutingModule).toBeTruthy();
  });
});
