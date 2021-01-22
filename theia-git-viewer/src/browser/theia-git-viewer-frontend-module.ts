/**
 * Generated using theia-extension-generator
 */
import { ContainerModule } from 'inversify';
import { TheiaGitViewerContribution } from './theia-git-viewer-contribution';


export default new ContainerModule(bind => {

    // Replace this line with the desired binding, e.g. "bind(CommandContribution).to(TheiaGitViewerContribution)
    bind(TheiaGitViewerContribution).toSelf();
});
